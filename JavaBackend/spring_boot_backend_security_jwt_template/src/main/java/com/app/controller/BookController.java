package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Positive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.dto.BookDTO;
import com.app.entities.Book;
import com.app.entities.Genre;
import com.app.service.BookService;
import com.app.service.ImageHandlingService;

@RestController
@RequestMapping("/books")
@Validated
//@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class BookController {
	@Autowired
	private BookService bookService;
	
	@Autowired
	private ImageHandlingService imgService;
	
	
	//REST API to add book 
	@PostMapping(value="/add" )
	public ResponseEntity<?> addBook( @RequestBody @Valid BookDTO b) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(bookService.addBook(b));
	}
	
	//REST API to add image to a specific book
	@PostMapping(value = "/images/{isbn}", 
			consumes = "multipart/form-data") //consumes : required ONLY for swagger testing
	public ResponseEntity<?> uploadImage(@PathVariable String isbn, 
			@RequestParam MultipartFile image)
			throws IOException {
		System.out.println("in upload img " + isbn);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(imgService.uploadImage(isbn, image));
	}

	//REST API to get list of books by it's genre 
	@GetMapping("/category/{genre}")
	public ResponseEntity<?> getBooksByGenre(@PathVariable Genre genre){
		List<Book> list = bookService.getBookByGenre(genre);
		//if(!list.isEmpty())
			return ResponseEntity.ok(list);
		//else
		//	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	
	//REST API to search books by title or author name
	@GetMapping("/search/{word}")
	public ResponseEntity<?> search(@PathVariable String word){
		List<Book> list = bookService.search(word);
		//if(!list.isEmpty())
			return ResponseEntity.ok(list);
		//else
		//	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	//REST API to get specific book by isbn number
	@GetMapping("/{isbn}")
	public ResponseEntity<?> getBook(@PathVariable String isbn){
		Book book = bookService.getBook(isbn);
		if(book !=null)
			return ResponseEntity.ok(book);
		else
			return ResponseEntity.ok(new ApiResponse("book not found with ISBN : "+ isbn));
	}
	
	//REST API to delete a book by isbn
	@DeleteMapping("/delete/{isbn}")
	public ResponseEntity<?> deleteBook(@PathVariable String isbn){
		return ResponseEntity.ok(bookService.deleteBook(isbn));
	}
	
	//REST API to update book details(including stocks) 
	@PutMapping
	public ResponseEntity<?> updateBook( @RequestBody @Valid BookDTO book) {
		BookDTO updatedBookDto = bookService.updateBook(book);
		if(updatedBookDto !=null)
			return ResponseEntity.ok(updatedBookDto);
		else
			return ResponseEntity.ok(new ApiResponse("Unable to update details!"));
	}
	
	//REST API to get book lesser than specific number of stocks
	@GetMapping("/stocks/{value}")
	public ResponseEntity<?> getBooksByStock(@PathVariable @Positive(message = "number should be greater than zero!") // the value should not be less than zero
	@Digits(integer = 5, fraction = 0, message = "must be whole number!") // it should be a whole no.
	 int value){
		List<Book> list = bookService.getBooksByStock(value);
		//if(!list.isEmpty())
			return ResponseEntity.ok(list);
		//else
		// return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	//REST API to get all books
		@GetMapping
		public ResponseEntity<?> getAllBook(){
			List<Book> list = bookService.getAllBook();
			//if(!list.isEmpty())
				return ResponseEntity.ok(list);
			//else
			//	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

}
