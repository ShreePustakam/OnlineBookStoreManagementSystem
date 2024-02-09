package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
//import com.app.dto.SetBookQtyDTO;

public interface BookQtyService {
	
	ApiResponse addToCart(@Valid Long cId, @Valid String isbn);
	
	List<BookQtyDTO> displayCart(@Valid Long cId);
}
