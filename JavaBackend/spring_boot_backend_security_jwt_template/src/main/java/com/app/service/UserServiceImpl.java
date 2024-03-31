package com.app.service;

import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

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
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public ApiResponse addCustomer(UserDTO newCustomer) {
		User user = mapper.map(newCustomer, User.class);
		user.setRole(Role.ROLE_CUSTOMER);
		user.setPassword(encoder.encode(user.getPassword()));//pwd : encrypted using SHA
		userDao.save(user);
		return new ApiResponse("Customer Signed-Up Successfully");
	}
	
	@Override
	public UserDTO showProfile(String email) {
		
		return mapper.map(userDao.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException("Invalid Customer Id")), UserDTO.class);
	}
	
	@Override
	public EditUserDTO editCustomer(String email, @Valid EditUserDTO editCustomer) {
		User user = userDao.findByEmail(email)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		user.setUserName(editCustomer.getUserName());
		user.setEmail(editCustomer.getEmail());
		user.setPhoneNo(editCustomer.getPhoneNo());
		userDao.save(user);
		return mapper.map(user, EditUserDTO.class);
	}
	
	@Override
	public ApiResponse changePassword(String email, @Valid UserPasswordDTO newPasword) {
		User user = userDao.findByEmail(email)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		//user.setPassword(newPasword.getPassword());
		user.setPassword(encoder.encode(newPasword.getPassword()));//pwd : encrypted using SHA
		userDao.save(user);
		return new ApiResponse("Password Changed Successfully");
	}
	
	
	
	@Override
	public ApiResponse addToWishlist(String email, @Valid String isbn) {
		User user = userDao.findByEmail(email)
							.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Book book = bookDao.getReferenceById(isbn);
		
		user.addToWishlist(book);
		return new ApiResponse("Book added to your Wishlist");
	}
	
	
	@Override
	public Set<Book> displayWishlist( String email) {
		User user = userDao.findByEmail(email)
				.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Set<Book> wishlist = user.getWishlist();
		wishlist.size();
		return wishlist;
	}
	
	@Override
	public UserDTO findProfile(String email) {
		return mapper.map(userDao.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException("Invalid Customer")),UserDTO.class);
	}
	
	@Override
	public UserDTO loginUser(@Valid LoginRequestDTO userLogin) {
		User usr = userDao.findByEmailAndPassword(userLogin.getEmail(),userLogin.getPassword())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Username or Password"));
		return mapper.map(usr, UserDTO.class);
	}
	
	@Override
	public ApiResponse removeFromWishlist(String email, @Valid String isbn) {
		User user = userDao.findByEmail(email)
				.orElseThrow(()-> new ResourceNotFoundException("Customer not found"));
		Book book = bookDao.getReferenceById(isbn);
		user.removeFromWishlist(book);
		return new ApiResponse("Book removed from your Wishlist");
	}
}
