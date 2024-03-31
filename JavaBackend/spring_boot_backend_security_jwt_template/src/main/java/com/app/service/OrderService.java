package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.OrderDTO;
import com.app.dto.PlaceOrderDTO;
import com.app.entities.OStatus;
import com.app.entities.OrderQty;

public interface OrderService {

	PlaceOrderDTO placeOrder(String email);
	
	ApiResponse cancelOrder(Long oId);
	
	ApiResponse changeOrderStatus(OStatus oStatus, Long oId);
	
	List<OrderDTO> getAllOrders(String email);
	
	List<BookQtyDTO> getAllBooksOfOrder(Long oId);

	List<OrderDTO> getAll();

}
