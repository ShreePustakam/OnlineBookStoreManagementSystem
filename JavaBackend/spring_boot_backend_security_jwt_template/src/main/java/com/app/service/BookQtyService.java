package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.SetBookQtyDTO;
//import com.app.dto.SetBookQtyDTO;

public interface BookQtyService {
	
	ApiResponse addToCart(String email, @Valid String isbn);
	
	List<BookQtyDTO> displayCart(String email);
	
	ApiResponse removeFromCart(String email, @Valid String isbn);

	ApiResponse setQuantity(String email,@Valid SetBookQtyDTO bookQty);
}
