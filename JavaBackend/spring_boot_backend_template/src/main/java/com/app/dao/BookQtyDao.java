package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BookQty;

public interface BookQtyDao extends JpaRepository<BookQty, Long> {
	
	public List<BookQty> findByCustomerCustomerId(Long cId);
	
	public void deleteByCustomerCustomerIdAndBookIsbn(Long cId,String isbn);
	
	public BookQty findByCustomerCustomerIdAndBookIsbn(Long cId,String isbn);

}
