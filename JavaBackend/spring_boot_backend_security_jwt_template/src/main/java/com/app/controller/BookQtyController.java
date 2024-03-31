package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SetBookQtyDTO;
//import com.app.dto.SetBookQtyDTO;
import com.app.service.BookQtyService;


@RestController
@RequestMapping("/bookqty")
@Validated
//@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class BookQtyController {

	@Autowired
	private BookQtyService bookQtyService;
	
	// REST API to add book to cart
	@PostMapping("/cart/{isbn}")
	public ResponseEntity<?> addtoCart(@PathVariable @Valid String isbn){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.CREATED).body(bookQtyService.addToCart(authentication.getPrincipal().toString(),isbn));
	}
		
	// REST API to display cart
	@GetMapping("/cart")
	public ResponseEntity<?> customerCart(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(bookQtyService.displayCart(authentication.getPrincipal().toString()));
	}
	
	// REST API to remove book from cart
	@DeleteMapping("/cart/{isbn}")
	public ResponseEntity<?> removeFromCart(@PathVariable @Valid Long cId,@PathVariable @Valid String isbn){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(bookQtyService.removeFromCart(authentication.getPrincipal().toString(),isbn));
	}
	
	// REST API to set quantity of the book
	@PutMapping("/cart/qty")
	public ResponseEntity<?> setQuantity(@RequestBody @Valid  SetBookQtyDTO bookQty){
			System.out.println(bookQty);
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(bookQtyService.setQuantity(authentication.getPrincipal().toString(),bookQty));
		}
}
