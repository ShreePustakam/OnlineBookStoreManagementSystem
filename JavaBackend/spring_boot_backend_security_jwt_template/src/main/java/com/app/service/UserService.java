package com.app.service;

import java.util.Set;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.dto.UserPasswordDTO;
import com.app.dto.EditUserDTO;
import com.app.dto.LoginRequestDTO;
import com.app.entities.Book;

public interface UserService {

	ApiResponse addCustomer(UserDTO newCustomer);

	UserDTO showProfile(String email);
	
	EditUserDTO editCustomer(String email, @Valid EditUserDTO editCustomer);
	
	ApiResponse changePassword(String email, @Valid UserPasswordDTO newPaasword);

	ApiResponse addToWishlist(String email, @Valid String isbn);

	Set<Book> displayWishlist(String email);

	UserDTO findProfile(String email);

	UserDTO loginUser(@Valid LoginRequestDTO userLogin);

	ApiResponse removeFromWishlist(String email, @Valid String isbn);
	
	

}
