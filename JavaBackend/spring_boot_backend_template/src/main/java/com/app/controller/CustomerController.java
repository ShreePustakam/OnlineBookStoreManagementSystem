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

import com.app.dto.CustomerDTO;
import com.app.dto.CustomerPasswordDTO;
import com.app.dto.EditCustomerDTO;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customer")
@Validated
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	// REST API for new customer signup
	@PostMapping("/SignUp")
	public ResponseEntity<?> customerSignUp( @RequestBody @Valid CustomerDTO newCustomer){
		return ResponseEntity.status(HttpStatus.CREATED).body(customerService.addCustomer(newCustomer));
	}
	
	// REST API to display Customer profile
	@GetMapping("/{emailId}")
	public ResponseEntity<?> showProfile(@PathVariable @Valid String emailId){
		return ResponseEntity.status(HttpStatus.FOUND).body(customerService.showProfile(emailId));
	}
	
	// REST API to edit customer details
	@PutMapping("/edit/{cId}")
	public ResponseEntity<?> editCustomer(@PathVariable @Valid Long cId,@RequestBody @Valid EditCustomerDTO editCustomer){
		return ResponseEntity.status(HttpStatus.OK).body(customerService.editCustomer(cId,editCustomer));
	}
}
