package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.dto.UserPasswordDTO;
import com.app.dto.EditUserDTO;
import com.app.service.UserService;

@RestController
@RequestMapping("/customer")
@Validated
public class UserController {

	@Autowired
	private UserService userService;
	
	// REST API for new customer signup
	@PostMapping("/SignUp")
	public ResponseEntity<?> customerSignUp( @RequestBody @Valid UserDTO newCustomer){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addCustomer(newCustomer));
	}
	
	// REST API to display Customer profile
	@GetMapping("/{emailId}")
	public ResponseEntity<?> showProfile(@PathVariable @Valid String emailId){
		return ResponseEntity.status(HttpStatus.FOUND).body(userService.showProfile(emailId));
	}
	
	// REST API to edit customer details
	@PutMapping("/edit/{cId}")
	public ResponseEntity<?> editCustomer(@PathVariable @Valid Long cId,@RequestBody @Valid EditUserDTO editCustomer){
		return ResponseEntity.status(HttpStatus.OK).body(userService.editCustomer(cId,editCustomer));
	}
	
	// REST API to change customer password
	@PutMapping("/pwd/{cId}")
	public ResponseEntity<?> changePassword(@PathVariable @Valid Long cId,@RequestBody @Valid UserPasswordDTO newPaasword){
		return ResponseEntity.status(HttpStatus.OK).body(userService.changePassword(cId,newPaasword));
	}
	
	// REST API to add book to wishlist
	@PostMapping("/wishlist/{cId}/{isbn}")
	public ResponseEntity<?> addtoWishlist(@PathVariable @Valid Long cId,@PathVariable @Valid String isbn){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addToWishlist(cId,isbn));
	}
	
	// REST API to display wishlist
	@GetMapping("/wishlist/{cId}")
	public ResponseEntity<?> customerWishlist(@PathVariable @Valid Long cId){
		return ResponseEntity.status(HttpStatus.FOUND).body(userService.displayWishlist(cId));
	}

	// REST API to Find user by id
	@GetMapping("/id/{cId}")
	public ResponseEntity<?> findProfile(@PathVariable @Valid Long cId){
		return ResponseEntity.status(HttpStatus.FOUND).body(userService.findProfile(cId));
	}
}
