package com.app.service;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.BookDao;
import com.app.dao.BookQtyDao;
import com.app.dao.UserDao;
import com.app.dao.OrderDao;
import com.app.dao.OrderQtyDao;
import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.OrderDTO;
import com.app.entities.BookQty;
import com.app.entities.OStatus;
import com.app.entities.Order;
import com.app.entities.OrderQty;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	@Autowired
	OrderDao orderDao;
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	BookQtyDao bookQtyDao;
	
	@Autowired
	OrderQtyDao orderQtyDao;
	
	@Autowired
	BookDao bookDao;
	
	//service method to place order
	@Override
	public ApiResponse placeOrder(Long cId) {
		// getting the list of book with quantity of specific customer
		List<BookQty> bookQtys =bookQtyDao.findByUserUserId(cId); //no unique in the bookQtys;
		//check for cart empty condition
		if(bookQtys.isEmpty())
			return new ApiResponse("No books in the cart !!!");
		//new order object transient -> persistent
		Order order = orderDao.save(new Order(null,OStatus.ORDERED,LocalDate.now(),LocalDate.now().plusDays(5),0,userDao.getReferenceById(cId)));
		//copied all the book quantity from customers cart to the order quantity list
		List<OrderQty> orderQtys= new ArrayList<OrderQty>();
		bookQtys.forEach(bookQty ->  orderQtys.add(new OrderQty(null, bookQty.getBook(), bookQty.getQuantity(), order)));
		double total =0;
			for(BookQty bookQty : bookQtys) { 
				
				// total order amount is calculated
				total += (bookQty.getBook().getPrice() * bookQty.getQuantity());
				// update book stocks
				if(bookQty.getBook().getStock()>=bookQty.getQuantity())
					//stock available STORED PROCEDURE CALLED (updateStocks)
					bookDao.updateBookStock(bookQty.getBook().getIsbn(), -bookQty.getQuantity());
				else {
					// if stocks not sufficient then throw error
					throw new ResourceNotFoundException("Insufficient stock available for : "+ bookQty.getBook().getTitle() + "STOCK LEFT : " + bookQty.getBook().getStock());
				}
			}		
		//set the order total in the persistent order object
		order.setTotalAmount(total);
		//all the order quantity is saved int the database
		orderQtyDao.saveAll(orderQtys);
		// empty the cart after ordered
		bookQtyDao.deleteAll(bookQtys);
		
		return new ApiResponse("order placed Successfully !! Order ID : "+ order.getOrderId());
	}
	
	// service method to cancle order
	@Override
	public ApiResponse cancelOrder(Long oId) {
		Order order = orderDao.findById(oId).orElseThrow(()-> new ResourceNotFoundException("Order/OrderId does not exists !!"));
		if(order.getOStatus()==OStatus.CANCELLED)
			return new ApiResponse("Order("+ oId +") has already "+ "CANCELLED" );
		List<OrderQty> orderQtys= orderQtyDao.findByOrderOrderId(oId);
		for(OrderQty orderQty : orderQtys) {
			//stock added back to the book stock
			bookDao.updateBookStock(  orderQty.getBook().getIsbn(), orderQty.getQuantity());
		}
		order.setOStatus(OStatus.CANCELLED);
		return new ApiResponse("Order("+ oId +") has been CANCELLED");
	}
	
	// service method to change the order status
	@Override
	public ApiResponse changeOrderStatus(OStatus oStatus, Long oId) {
		Order order = orderDao.findById(oId).orElseThrow(()-> new ResourceNotFoundException("Order/OrderId does not exists !!"));
		if(order.getOStatus()==OStatus.CANCELLED)
			return new ApiResponse("Order("+ oId +") is a CANCELLED order!");
		if(oStatus==OStatus.CANCELLED)
		return cancelOrder(oId);
		order.setOStatus(oStatus);
		return new ApiResponse("Order("+ oId +") status changed to "+ oStatus.toString());
	}
	
	//service method to get all orders of specific customer
	@Override
	public List<OrderDTO> getAllOrders(Long uId) {
		return  orderDao.findByUserUserId(uId).stream().map(order -> mapper.map(order, OrderDTO.class)).collect(Collectors.toList());	
	}
	
	//service method to get all books of specific order
	@Override
	public List<BookQtyDTO> getAllBooksOfOrder(Long oId) {
		return orderQtyDao.findByOrderOrderId(oId).stream().map(orderQty -> mapper.map(orderQty, BookQtyDTO.class)).collect(Collectors.toList());
	}

	//service method to get all orders of all customers
	@Override
	public List<OrderDTO> getAll() {
		return orderDao.findAll().stream().map(order -> mapper.map(order, OrderDTO.class)).collect(Collectors.toList());
	}
	
	
	
	

}
