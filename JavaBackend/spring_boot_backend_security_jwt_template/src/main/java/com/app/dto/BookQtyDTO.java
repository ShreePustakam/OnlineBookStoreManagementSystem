package com.app.dto;

import com.app.entities.Book;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookQtyDTO {
	
	private Long id;

	private Book book;
	
	private int quantity;
}
