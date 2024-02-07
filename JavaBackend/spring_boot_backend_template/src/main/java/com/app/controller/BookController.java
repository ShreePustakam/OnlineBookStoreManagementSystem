package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import com.app.dto.BookDTO;
import com.app.entities.Book;
import com.app.entities.Genre;
import com.app.service.BookService;
import com.app.service.ImageHandlingService;

@RestController
@RequestMapping("/books")
@Validated
public class BookController {
	@Autowired
	private BookService bookService;
	@Autowired
	private ImageHandlingService imgService;
	//REST API to add book 
	@PostMapping(value="/add" )
	public ResponseEntity<?> addBook( @RequestBody @Valid BookDTO b) {
		System.out.println("controller----");

		return ResponseEntity.status(HttpStatus.CREATED)
				.body(bookService.addBook(b));
	}
	
	//REST API to add image to a specific book
	@PostMapping(value = "/images/{isbn}", 
			consumes = "multipart/form-data") //consumes : required ONLY for swagger testing
	public ResponseEntity<?> uploadImage(@PathVariable String isbn, 
			@RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + isbn);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(imgService.uploadImage(isbn, imageFile));
	}

	//REST API to get list of books by it's genre 
	@GetMapping("/category/{genre}")
	public ResponseEntity<?> getBooksByGenre(@PathVariable Genre genre){
		List<Book> list = bookService.getBookByGenre(genre);
		if(!list.isEmpty())
			return ResponseEntity.ok(list);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	
	//REST API to search books by title or author name
	@GetMapping("/search/{word}")
	public ResponseEntity<?> search(@PathVariable String word){
		List<Book> list = bookService.search(word);
		if(!list.isEmpty())
			return ResponseEntity.ok(list);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	//REST API to get specific book by isbn number
	@GetMapping("/{isbn}")
	public ResponseEntity<?> getBook(@PathVariable String isbn){
		Book book = bookService.getBook(isbn);
		if(book !=null)
			return ResponseEntity.ok(book);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	

}
