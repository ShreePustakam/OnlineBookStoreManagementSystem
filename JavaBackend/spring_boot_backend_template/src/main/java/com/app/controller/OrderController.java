package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.OrderDTO;
import com.app.entities.OStatus;
import com.app.service.OrderService;
@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	OrderService orderService;
	
	
	//REST API to place order for the books present in the customer's cart
	@PostMapping("/{cId}")
	public ResponseEntity<?> placeOrder(@PathVariable Long cId){
		return ResponseEntity.ok(orderService.placeOrder(cId));
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
	@GetMapping("/{cId}")
	public ResponseEntity<?> getAllOrders(@PathVariable Long cId){
		List<OrderDTO> list =	orderService.getAllOrders(cId);
		if(!list.isEmpty())
			return ResponseEntity.ok(list);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("You have no orders yet!!"));
	}
}