package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.EditAddressDTO;
import com.app.dto.SaveAddressDTO;
import com.app.service.AddressService;

@RestController
@RequestMapping("/address")
@Validated
//@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@PostMapping("/save")
	//@CrossOrigin( origins = "http://localhost:3000")
	public ResponseEntity<?> saveAddress(@RequestBody @Valid SaveAddressDTO addressDto){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println(authentication.getPrincipal().toString());
		return ResponseEntity.status(HttpStatus.OK).body(addressService.saveAddress(authentication.getPrincipal().toString(),addressDto));
	}
	
	@GetMapping
	//@CrossOrigin( origins = "http://localhost:3000")
	public ResponseEntity<?> showAddress(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		SaveAddressDTO address= addressService.showAddress(authentication.getPrincipal().toString());
		if(address==null)
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Address not found"));
		return ResponseEntity.status(HttpStatus.OK).body(address);
	}
	
	@PutMapping("/edit")
	public ResponseEntity<?> editAddress(@RequestBody @Valid EditAddressDTO addressDto){
		Authentication authentication  = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(addressService.editAddress(authentication.getPrincipal().toString(),addressDto));
	}
}
