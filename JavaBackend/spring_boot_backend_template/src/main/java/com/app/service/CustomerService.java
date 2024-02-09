package com.app.service;

import java.util.Set;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.CustomerDTO;
import com.app.dto.CustomerPasswordDTO;
import com.app.dto.EditCustomerDTO;
import com.app.entities.Book;

public interface CustomerService {

	ApiResponse addCustomer(CustomerDTO newCustomer);

	CustomerDTO showProfile(String emailId);
	
	EditCustomerDTO editCustomer(Long cId, @Valid EditCustomerDTO editCustomer);
	
	ApiResponse changePassword(@Valid Long cId, @Valid CustomerPasswordDTO newPaasword);

	ApiResponse addToWishlist(@Valid Long cId, @Valid String isbn);

	Set<Book> displayWishlist(@Valid Long cId);

	CustomerDTO findProfile(@Valid Long cId);

}
