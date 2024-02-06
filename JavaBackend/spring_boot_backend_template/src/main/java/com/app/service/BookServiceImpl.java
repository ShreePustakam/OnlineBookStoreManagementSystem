package com.app.service;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.dao.BookDao;
import com.app.dto.BookDTO;
import com.app.entities.Book;
@Service
@Transactional
public class BookServiceImpl implements BookService {
	@Autowired
	public BookDao bookDao;
	@Autowired
	public ModelMapper mapper;
	
	@Override
	public String addBook(BookDTO b) {
		Book book = mapper.map(b, Book.class);
		bookDao.save(book);
		
		return "added successfully!!";
	}

}
