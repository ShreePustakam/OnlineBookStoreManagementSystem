package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SaveAddressDTO;
import com.app.service.AddressService;

@RestController
@RequestMapping("/address")
@Validated
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@PostMapping("/save")
	public ResponseEntity<?> saveAddress(@RequestBody @Valid SaveAddressDTO addressDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(addressService.saveAddress(addressDto));
	}
	
	@GetMapping("/{cId}")
	public ResponseEntity<?> showAddress(@PathVariable @Valid Long cId){
		return ResponseEntity.status(HttpStatus.OK).body(addressService.showAddress(cId));
	}
}
