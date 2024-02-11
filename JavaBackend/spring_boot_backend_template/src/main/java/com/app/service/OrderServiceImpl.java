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
import com.app.dao.CustomerDao;
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
	CustomerDao customerDao;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	BookQtyDao bookQtyDao;
	
	@Autowired
	OrderQtyDao orderQtyDao;
	
	@Autowired
	BookDao bookDao;
	
	
	

	
	
	
	
	
	

}
