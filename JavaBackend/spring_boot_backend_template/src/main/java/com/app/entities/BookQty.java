package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "book_isbn", "customer_id" }) })
public class BookQty {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(length=40)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "book_isbn", nullable =false, columnDefinition = "varchar(13)")
	private Book book;
	
	@Column(columnDefinition ="int default 1" )
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
}
