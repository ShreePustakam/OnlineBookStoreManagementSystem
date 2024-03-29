package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SetBookQtyDTO;
//import com.app.dto.SetBookQtyDTO;
import com.app.service.BookQtyService;


@RestController
@RequestMapping("/bookQty")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class BookQtyController {

	@Autowired
	private BookQtyService bookQtyService;
	
	// REST API to add book to cart
	@PostMapping("/cart/{cId}/{isbn}")
	public ResponseEntity<?> addtoCart(@PathVariable @Valid Long cId,@PathVariable @Valid String isbn){
		return ResponseEntity.status(HttpStatus.CREATED).body(bookQtyService.addToCart(cId,isbn));
	}
		
	// REST API to display cart
	@GetMapping("/cart/{cId}")
	public ResponseEntity<?> customerCart(@PathVariable @Valid Long cId){
		return ResponseEntity.status(HttpStatus.OK).body(bookQtyService.displayCart(cId));
	}
	
	// REST API to remove book from cart
	@DeleteMapping("/cart/{cId}/{isbn}")
	public ResponseEntity<?> removeFromCart(@PathVariable @Valid Long cId,@PathVariable @Valid String isbn){
		return ResponseEntity.status(HttpStatus.OK).body(bookQtyService.removeFromCart(cId,isbn));
	}
	
	// REST API to set quantity of the book
	@PutMapping("/cart/qty")
	public ResponseEntity<?> setQuantity(@RequestBody @Valid  SetBookQtyDTO bookQty){
			System.out.println(bookQty);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(bookQtyService.setQuantity(bookQty));
		}
}
