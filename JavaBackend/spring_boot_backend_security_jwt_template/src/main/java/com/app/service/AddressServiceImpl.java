package com.app.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AddressDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.EditAddressDTO;
import com.app.dto.SaveAddressDTO;
import com.app.entities.Address;
import com.app.entities.User;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressDao addressDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse saveAddress(String email,@Valid SaveAddressDTO addressDto) {
		
		User user = userDao.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("user not found!!"));
		Address address = mapper.map(addressDto, Address.class);
		address.setUser(user);
		return new ApiResponse("Address Saved Successfully");
	}
	
	@Override
	public SaveAddressDTO showAddress(String email) {
	Address address=addressDao.findByUserEmail(email).orElse(null);
	if(address==null)
		return null;
				
		return mapper.map(address, SaveAddressDTO.class);
	}
	
	@Override
	public ApiResponse editAddress(String email,@Valid EditAddressDTO addressDto) {
		Address address = addressDao.findByUserEmail(email).orElse(null);
		if(address==null)
			return new ApiResponse("Address not found");
		address.setStreetArea(addressDto.getStreetArea());
		address.setCity(addressDto.getCity());
		address.setState(addressDto.getState());
		address.setPincode(addressDto.getPincode());
		return new ApiResponse("Address Edited Successfully");
	}
}
