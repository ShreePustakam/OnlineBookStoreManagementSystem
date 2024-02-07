package com.app.service;

import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.BookDao;
import com.app.dao.CustomerDao;
import com.app.dto.ApiResponse;
import com.app.dto.CustomerDTO;
import com.app.dto.CustomerPasswordDTO;
import com.app.dto.EditCustomerDTO;
import com.app.entities.Book;
import com.app.entities.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private BookDao bookDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addCustomer(CustomerDTO newCustomer) {
		Customer customer = mapper.map(newCustomer, Customer.class);
		customerDao.save(customer);
		return new ApiResponse("Customer Signed-Up Successfully");
	}
	
	@Override
	public CustomerDTO showProfile(String emailId) {
		
		return mapper.map(customerDao.findByEmail(emailId), CustomerDTO.class);
	}
	
	@Override
	public EditCustomerDTO editCustomer(Long cId, @Valid EditCustomerDTO editCustomer) {
		Customer customer = customerDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		customer.setCustomerName(editCustomer.getCustomerName());
		customer.setEmail(editCustomer.getEmail());
		customer.setPhoneNo(editCustomer.getPhoneNo());
		customerDao.save(customer);
		return mapper.map(customer, EditCustomerDTO.class);
	}
	
	@Override
	public ApiResponse changePassword(@Valid Long cId, @Valid CustomerPasswordDTO newPaasword) {
		Customer customer = customerDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		customer.setPassword(newPaasword.getPassword());
		customerDao.save(customer);
		return new ApiResponse("Password Changed Successfully");
	}
	
	@Override
	public ApiResponse addToCart(@Valid Long cId, @Valid String isbn) {
		Customer customer = customerDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Book book = bookDao.getReferenceById(isbn);
		
		customer.addToCart(book);
		return new ApiResponse("Book added to your cart");
	}
	
	@Override
	public ApiResponse addToWishlist(@Valid Long cId, @Valid String isbn) {
		Customer customer = customerDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Book book = bookDao.getReferenceById(isbn);
		
		customer.addToWishlist(book);
		return new ApiResponse("Book added to your Wishlist");
	}
}
