package com.app.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressDao;
import com.app.dao.CustomerDao;
import com.app.dto.ApiResponse;
import com.app.dto.SaveAddressDTO;
import com.app.entities.Address;
import com.app.entities.Customer;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressDao addressDao;
	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse saveAddress(@Valid SaveAddressDTO addressDto) {
		
		Customer customer = customerDao.getReferenceById(addressDto.getCustomerId());
		Address address = mapper.map(addressDto, Address.class);
		address.setCustomer(customer);
		addressDao.save(address);
		return new ApiResponse("Address Saved Successfully");
	}
	
	@Override
	public SaveAddressDTO showAddress(@Valid Long cId) {
		return mapper.map(addressDao.findByCustomerCustomerId(cId), SaveAddressDTO.class);
	}
}
