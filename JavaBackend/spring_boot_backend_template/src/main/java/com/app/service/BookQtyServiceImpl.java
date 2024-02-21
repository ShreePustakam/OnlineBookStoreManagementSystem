package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.dao.BookDao;
import com.app.dao.BookQtyDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.BookQtyDTO;
import com.app.dto.SetBookQtyDTO;
import com.app.entities.Book;
import com.app.entities.BookQty;
import com.app.entities.User;

@Service
@Transactional
public class BookQtyServiceImpl implements BookQtyService {
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private BookDao bookDao;
	
	@Autowired
	private BookQtyDao bookQtyDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addToCart(@Valid Long cId, @Valid String isbn) {
		
		BookQty booksQty = bookQtyDao.findByUserUserIdAndBookIsbn(cId, isbn);
		
		if(booksQty != null)
			return new ApiResponse("Book alredy present in your cart");
		
		User user = userDao.getReferenceById(cId);
		Book book = bookDao.getReferenceById(isbn);
		BookQty cartItem = new BookQty();
		cartItem.setBook(book);
		cartItem.setQuantity(1);
		cartItem.setUser(user);
		bookQtyDao.save(cartItem);
		
		return new ApiResponse("Book added to your cart");
	}
	
	@Override
	public List<BookQtyDTO> displayCart(@Valid Long cId) {
		
		return bookQtyDao.findByUserUserId(cId)
			   .stream()
			   .map(bookQty -> mapper.map(bookQty, BookQtyDTO.class))
			   .collect(Collectors.toList());
	}
	
	@Override
	public ApiResponse removeFromCart(@Valid Long cId, @Valid String isbn) {
		
		bookQtyDao.deleteByUserUserIdAndBookIsbn(cId, isbn);
		
		return new ApiResponse("Book removed from your cart");
	}
	
	@Override
	public ApiResponse setQuantity(@Valid SetBookQtyDTO bookQty) {
		
		BookQty booksQty = bookQtyDao.findByUserUserIdAndBookIsbn(bookQty.getUserId(), bookQty.getIsbn());
		booksQty.setQuantity(bookQty.getQuantity());
		
		return new ApiResponse("Quantity Set");
	}
}
