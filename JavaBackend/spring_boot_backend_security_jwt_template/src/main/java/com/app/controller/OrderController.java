package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.OrderDTO;
import com.app.dto.PlaceOrderDTO;
import com.app.entities.OStatus;
import com.app.service.OrderService;
@RestController
@RequestMapping("/orders")
//@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class OrderController {
	@Autowired
	OrderService orderService;
	
	
	//REST API to place order for the books present in the customer's cart
	@PostMapping
	public ResponseEntity<?> placeOrder(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PlaceOrderDTO orderDto = orderService.placeOrder(authentication.getPrincipal().toString());
		if(orderDto == null)
			return ResponseEntity.ok(new ApiResponse("Cart is Empty !!!")); 
		
		return ResponseEntity.ok(orderDto);
	}
	
	//REST API to cancel order 
	@PutMapping("/{oId}")
	public ResponseEntity<?> cancelOrder(@PathVariable Long oId){
		return ResponseEntity.ok(orderService.cancelOrder(oId));
	}
	
	//REST API to change order status
	@PutMapping("/{oStatus}/{oId}")
	public ResponseEntity<?> changeOrderStatus(@PathVariable OStatus oStatus, @PathVariable Long oId){
		return ResponseEntity.ok(orderService.changeOrderStatus(oStatus,oId));
	}
	
	//REST API to get all orders of a customer
	@GetMapping("/myorders")
	public ResponseEntity<?> getAllOrders(@PathVariable Long cId){
		Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
		List<OrderDTO> list =	orderService.getAllOrders(authentication.getPrincipal().toString());
		//if(!list.isEmpty())
			return ResponseEntity.ok(list);
		//else
		//	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("You have no orders yet!!"));
	}
	
	//REST API TO get all books of specific order(also for bill generation)
	@GetMapping("/books/{oId}")
	public ResponseEntity<?> getAllBooksOfOrder(@PathVariable Long oId){
		List<BookQtyDTO> list=	orderService.getAllBooksOfOrder(oId);
		//if(!list.isEmpty())
			return ResponseEntity.ok(list);
		//else
		//	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No books in order!!"));
	}
	
	//REST API to get all orders of all customers(for Admin)
	@GetMapping("/all")
	public ResponseEntity<?> getAll(){
		List<OrderDTO> list =	orderService.getAll();
		if(!list.isEmpty())
			return ResponseEntity.ok(list);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No orders yet!!"));
	}
}