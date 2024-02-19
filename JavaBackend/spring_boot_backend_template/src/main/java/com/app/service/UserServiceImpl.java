package com.app.service;

import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.BookDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.dto.UserPasswordDTO;
import com.app.dto.EditUserDTO;
import com.app.dto.LoginRequestDTO;
import com.app.entities.Book;
import com.app.entities.User;
import com.app.entities.Role;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private BookDao bookDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addCustomer(UserDTO newCustomer) {
		User user = mapper.map(newCustomer, User.class);
		user.setRole(Role.CUSTOMER);
		userDao.save(user);
		return new ApiResponse("Customer Signed-Up Successfully");
	}
	
	@Override
	public UserDTO showProfile(Long uId) {
		
		return mapper.map(userDao.findById(uId).orElseThrow(()-> new ResourceNotFoundException("Invalid Customer Id")), UserDTO.class);
	}
	
	@Override
	public EditUserDTO editCustomer(Long cId, @Valid EditUserDTO editCustomer) {
		User user = userDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		user.setUserName(editCustomer.getCustomerName());
		user.setEmail(editCustomer.getEmail());
		user.setPhoneNo(editCustomer.getPhoneNo());
		userDao.save(user);
		return mapper.map(user, EditUserDTO.class);
	}
	
	@Override
	public ApiResponse changePassword(@Valid Long cId, @Valid UserPasswordDTO newPaasword) {
		User user = userDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		user.setPassword(newPaasword.getPassword());
		userDao.save(user);
		return new ApiResponse("Password Changed Successfully");
	}
	
	
	
	@Override
	public ApiResponse addToWishlist(@Valid Long cId, @Valid String isbn) {
		User user = userDao.findById(cId)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Book book = bookDao.getReferenceById(isbn);
		
		user.addToWishlist(book);
		return new ApiResponse("Book added to your Wishlist");
	}
	
	
	@Override
	public Set<Book> displayWishlist(@Valid Long cId) {
		User user = userDao.findById(cId)
				.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Set<Book> wishlist = user.getWishlist();
		wishlist.size();
		return wishlist;
	}
	
	@Override
	public UserDTO findProfile(@Valid Long cId) {
		return mapper.map(userDao.findById(cId).orElseThrow(()-> new ResourceNotFoundException("Invalid Customer Id")),UserDTO.class);
	}
	
	@Override
	public UserDTO loginUser(@Valid LoginRequestDTO userLogin) {
		User usr = userDao.findByEmailAndPassword(userLogin.getEmail(),userLogin.getPassword())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Username or Password"));
		return mapper.map(usr, UserDTO.class);
	}
}
