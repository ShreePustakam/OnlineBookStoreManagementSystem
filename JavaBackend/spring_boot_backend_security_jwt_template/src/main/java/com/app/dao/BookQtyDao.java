package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BookQty;

public interface BookQtyDao extends JpaRepository<BookQty, Long> {
	
	public List<BookQty> findByUserEmail(String email);
	
	public void deleteByUserEmailAndBookIsbn(String email,String isbn);
	
	public BookQty findByUserEmailAndBookIsbn(String email,String isbn);
}
