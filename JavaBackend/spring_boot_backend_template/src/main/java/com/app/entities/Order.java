package com.app.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long oId;
	@Column
	private int quantity;
	@Column(length = 20)
	@Enumerated(EnumType.STRING)
	private OStatus oStatus;
	@Column
	private LocalDate oDate;
	@Column
	private LocalDate dDate;
	
	@ManyToMany
	//@JoinColumn(name = "orders_books", joinColumns = @JoinColumn(name = "project_id", nullable = false), inverseJoinColumns = @JoinColumn(name = "emp_id", nullable = false))
	private Set<Book> isbns = new HashSet<>();

	
	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private Customer customer;
}