package com.app.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public ApiResponse saveAddress(@Valid SaveAddressDTO addressDto) {
		
		User user = userDao.getReferenceById(addressDto.getUserId());
		Address address = mapper.map(addressDto, Address.class);
		address.setUser(user);
		addressDao.save(address);
		return new ApiResponse("Address Saved Successfully");
	}
	
	@Override
	public SaveAddressDTO showAddress(@Valid Long cId) {
	Address address=addressDao.findByUserUserId(cId).orElse(null);
	if(address==null)
		return null;
				
		return mapper.map(address, SaveAddressDTO.class);
	}
	
	@Override
	public ApiResponse editAddress(@Valid Long uId,@Valid EditAddressDTO addressDto) {
		Address address = addressDao.findByUserUserId(uId).orElse(null);
		if(address==null)
			return new ApiResponse("Address not found");
		address.setStreetArea(addressDto.getStreetArea());
		address.setCity(addressDto.getCity());
		address.setState(addressDto.getState());
		address.setPincode(addressDto.getPincode());
		addressDao.save(address);
		return new ApiResponse("Address Edited Successfully");
	}
}
