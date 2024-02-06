package com.app.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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
	
	@PostMapping(value="/add" )
	public ResponseEntity<?> addBook( @RequestBody @Valid BookDTO b) {
		System.out.println("controller----");

		return ResponseEntity.status(HttpStatus.CREATED)
				.body(bookService.addBook(b));
	}
	
	
	@PostMapping(value = "/images/{isbn}", 
			consumes = "multipart/form-data") //consumes : required ONLY for swagger testing
	public ResponseEntity<?> uploadImage(@PathVariable String isbn, 
			@RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + isbn);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(imgService.uploadImage(isbn, imageFile));
	}
	
}
