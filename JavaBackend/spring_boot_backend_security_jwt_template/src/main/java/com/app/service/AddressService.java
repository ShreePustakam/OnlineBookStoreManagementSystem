package com.app.service;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.EditAddressDTO;
import com.app.dto.SaveAddressDTO;

public interface AddressService {

	ApiResponse saveAddress(String email,@Valid SaveAddressDTO addressDto);

	SaveAddressDTO showAddress(String email);

	ApiResponse editAddress(String email,@Valid EditAddressDTO addressDto);
}
