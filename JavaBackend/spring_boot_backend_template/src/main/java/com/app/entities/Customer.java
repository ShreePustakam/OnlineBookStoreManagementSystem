package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cId;
	@Column(length = 20)
	private String CustomerName;
	@Column(length = 20,unique = true)
	private String email;
	@Column(length = 10,unique = true)
	private String phoneNo;
	@Column(length = 16)
	private String password;
	
	@ManyToMany
    @JoinTable(name = "cart")
    private Set<Book> cart = new HashSet<>();
	
	@ManyToMany
    @JoinTable(name = "wish_list")
    private Set<Book> wishlist = new HashSet<>();
	
	public void addToCart(Book newBook) {
		cart.add(newBook);
	}
	
	public void removeFromCart(Book oldBook) {
		cart.remove(oldBook);
	}
	
	public void addToWishlist(Book newBook) {
		wishlist.add(newBook);
	}
	
	public void removeFromWishlist(Book oldBook) {
		wishlist.remove(oldBook);
	}
}
