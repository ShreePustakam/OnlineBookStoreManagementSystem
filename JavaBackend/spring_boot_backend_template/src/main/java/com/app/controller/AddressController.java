package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.EditAddressDTO;
import com.app.dto.SaveAddressDTO;
import com.app.service.AddressService;

@RestController
@RequestMapping("/address")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@PostMapping("/save")
	public ResponseEntity<?> saveAddress(@RequestBody @Valid SaveAddressDTO addressDto){
		return ResponseEntity.status(HttpStatus.OK).body(addressService.saveAddress(addressDto));
	}
	
	@GetMapping("/{cId}")
	public ResponseEntity<?> showAddress(@PathVariable @Valid Long cId){
		SaveAddressDTO address= addressService.showAddress(cId);
		if(address==null)
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Address not found"));
		return ResponseEntity.status(HttpStatus.OK).body(address);
	}
	
	@PutMapping("/edit/{cId}")
	public ResponseEntity<?> editAddress(@RequestBody @Valid EditAddressDTO addressDto,@PathVariable @Valid Long cId){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(addressService.editAddress(cId,addressDto));
	}
}
