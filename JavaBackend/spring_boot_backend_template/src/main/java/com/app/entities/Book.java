package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "books")
public class Book {
	@Id
	@Column(length = 20)
	private String isbn;
	@Column(length = 40)
	private String title;
	@Lob
	private String description;
	@Column(length = 20)
	private String Author;
	@Column(length = 20)
	private double price;
	@Column(length = 20)
	@Enumerated(EnumType.STRING)
	private Binding binding;
	@Column(length = 20)
	@Enumerated(EnumType.STRING)
	private Genre genre;
	@Column
	private LocalDate publishedDate;
	@Lob
	private byte[] image;
	
	@Column
	private int stock;
}
