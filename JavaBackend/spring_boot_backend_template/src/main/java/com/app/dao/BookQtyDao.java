package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BookQty;

public interface BookQtyDao extends JpaRepository<BookQty, Long> {
	
	public List<BookQty> findByUserUserId(Long isbn);
	
	public void deleteByUserUserIdAndBookIsbn(Long cId,String isbn);
	
	public BookQty findByUserUserIdAndBookIsbn(Long cId,String isbn);
}
