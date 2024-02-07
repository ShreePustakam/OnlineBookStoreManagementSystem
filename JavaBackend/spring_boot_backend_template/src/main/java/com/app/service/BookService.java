package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.BookDTO;
import com.app.entities.Book;
import com.app.entities.Genre;


public interface BookService {
	public String addBook(BookDTO b );
	
	public List<Book> getBookByGenre(Genre genre);
	
	public List<Book> search(String word);
	
	public Book getBook(String isbn);
	
	public ApiResponse deleteBook(String isbn);
	
	public BookDTO updateBook( BookDTO book);
	
}
