package com.app.service;

import javax.validation.Valid;

import com.app.dto.ApiResponse;
import com.app.dto.EditAddressDTO;
import com.app.dto.SaveAddressDTO;

public interface AddressService {

	ApiResponse saveAddress(@Valid SaveAddressDTO addressDto);

	SaveAddressDTO showAddress(@Valid Long cId);

	ApiResponse editAddress(@Valid Long cId,@Valid EditAddressDTO addressDto);
}
