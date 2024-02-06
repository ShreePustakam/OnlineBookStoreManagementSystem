package com.app.dto;

import java.time.LocalDate;


import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import com.app.entities.Binding;
import com.app.entities.Genre;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDTO {
	@Size(min = 13, max = 13, message = "Invalid isbn length!")
	private String isbn;
	@NotBlank
	private String title;
	
	private String description;
	
	private String Author;
	@NotNull
	private double price;
	
	@Enumerated(EnumType.STRING)
	private Binding binding;
	
	@Enumerated(EnumType.STRING)
	private Genre genre;
	@Past
	private LocalDate publishedDate;
}
