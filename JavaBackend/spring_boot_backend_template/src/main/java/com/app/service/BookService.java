package com.app.service;

import java.util.List;

import com.app.dto.BookDTO;
import com.app.entities.Book;
import com.app.entities.Genre;


public interface BookService {
	public String addBook(BookDTO b );
	
	public List<Book> getBookByGenre(Genre genre);
}
