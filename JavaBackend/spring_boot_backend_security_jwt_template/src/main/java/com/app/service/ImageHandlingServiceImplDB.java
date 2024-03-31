package com.app.service;

import java.io.IOException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.BookDao;

import com.app.dto.ApiResponse;
import com.app.entities.Book;


@Service("image_db")
@Transactional
public class ImageHandlingServiceImplDB implements ImageHandlingService {
	@Autowired
	private BookDao bookDao;

	@Override
	public ApiResponse uploadImage(String isbn, MultipartFile image) 
			throws IOException {
		
		Book b = bookDao.findById(isbn).
				orElseThrow(() -> 
				new ResourceNotFoundException("Invalid book ID!!!!"));
		
		b.setImage(image.getBytes());
		return new ApiResponse("Image file uploaded successfully for emp id " + isbn);
	}

	

}
