package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.OrderDTO;
import com.app.entities.OStatus;
import com.app.entities.OrderQty;

public interface OrderService {

	ApiResponse placeOrder(Long cId);
	
	ApiResponse cancelOrder(Long oId);
	
	ApiResponse changeOrderStatus(OStatus oStatus, Long oId);

}
