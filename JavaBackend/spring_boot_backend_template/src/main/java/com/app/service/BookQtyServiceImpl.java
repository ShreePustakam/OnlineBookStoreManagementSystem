package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BookDao;
import com.app.dao.BookQtyDao;
import com.app.dao.CustomerDao;
import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.entities.Book;
import com.app.entities.BookQty;
import com.app.entities.Customer;

@Service
@Transactional
public class BookQtyServiceImpl implements BookQtyService {
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private BookDao bookDao;
	
	@Autowired
	private BookQtyDao bookQtyDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addToCart(@Valid Long cId, @Valid String isbn) {
		Customer customer = customerDao.getReferenceById(cId);
		Book book = bookDao.getReferenceById(isbn);
		BookQty cartItem = new BookQty();
		cartItem.setBook(book);
		cartItem.setQuantity(1);
		cartItem.setCustomer(customer);
		bookQtyDao.save(cartItem);
		return new ApiResponse("Book added to your cart");
	}
	
	@Override
	public List<BookQtyDTO> displayCart(@Valid Long cId) {
		
		return bookQtyDao.findByCustomerCustomerId(cId)
			   .stream()
			   .map(bookQty -> mapper.map(bookQty, BookQtyDTO.class))
			   .collect(Collectors.toList());
	}
}
