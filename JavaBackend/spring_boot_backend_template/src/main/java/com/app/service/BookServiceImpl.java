package com.app.service;


import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.BookDao;
import com.app.dto.BookDTO;
import com.app.entities.Book;
import com.app.entities.Genre;
@Service
@Transactional
public class BookServiceImpl implements BookService {
	@Autowired
	public BookDao bookDao;
	@Autowired
	public ModelMapper mapper;
	//Service method to add book
	@Override
	public String addBook(BookDTO b) {
		Book book = mapper.map(b, Book.class);
		bookDao.save(book);
		
		return "added successfully!!";
	}

	//service method to find the list of books by genre
	@Override
	public List<Book> getBookByGenre(Genre genre) {
		return bookDao.findByGenre(genre);
	}
	
	//service method to search the book by title or author
	@Override
	public List<Book> search(String word) {
		return bookDao.findByTitleOrAuthor(word);
	}

	
}
