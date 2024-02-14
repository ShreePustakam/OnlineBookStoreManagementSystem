package com.app.service;

import java.util.Set;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.dto.UserPasswordDTO;
import com.app.dto.EditUserDTO;
import com.app.entities.Book;

public interface UserService {

	ApiResponse addCustomer(UserDTO newCustomer);

	UserDTO showProfile(String emailId);
	
	EditUserDTO editCustomer(Long cId, @Valid EditUserDTO editCustomer);
	
	ApiResponse changePassword(@Valid Long cId, @Valid UserPasswordDTO newPaasword);

	ApiResponse addToWishlist(@Valid Long cId, @Valid String isbn);

	Set<Book> displayWishlist(@Valid Long cId);

	UserDTO findProfile(@Valid Long cId);

}
