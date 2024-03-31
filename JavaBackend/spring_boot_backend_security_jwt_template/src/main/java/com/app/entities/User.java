package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	@Column(length = 20)
	private String userName;
	@Column(length = 50,unique = true)
	private String email;
	@Column(length = 10,unique = true)
	private String phoneNo;
	@Column(length = 300, nullable = false)
	private String password;
	@Column(columnDefinition ="varchar(20) default 'ROLE_CUSTOMER'")
	@Enumerated(EnumType.STRING)
	private Role role;
	
//	@OneToMany
//    @JoinTable(name = "cart")
//    private Set<BookQty> cart = new HashSet<>();
	
	@ManyToMany
    @JoinTable(name = "wishlist")
    private Set<Book> wishlist = new HashSet<>();
	
//	public void addToCart(BookQty newBook) {
//		cart.add(newBook);
//	}
//	
//	public void removeFromCart(BookQty oldBook) {
//		cart.remove(oldBook);
//	}
	
	public void addToWishlist(Book newBook) {
		wishlist.add(newBook);
	}
	
	public void removeFromWishlist(Book oldBook) {
		wishlist.remove(oldBook);
	}
}
