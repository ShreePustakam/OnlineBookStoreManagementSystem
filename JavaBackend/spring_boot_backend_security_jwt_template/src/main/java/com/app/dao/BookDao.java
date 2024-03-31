package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;

import com.app.entities.Book;
import com.app.entities.Genre;

public interface BookDao extends JpaRepository<Book, String> {
	
    List<Book> findByGenre(Genre genre);
    
    @Query(value = "select * from books where title like %:word% or author like %:word%", nativeQuery = true)
	List<Book> findByTitleOrAuthor(String word);
    
    List<Book> findByStockLessThanEqual(int value);
    
    @Procedure("updateStocks")
    public void updateBookStock(String bookIsbn, int value);
    
    /* 
        delimiter //    
		CREATE procedure updateStocks(bookIsbn varchar(13), value int)   
		begin 
   			update books set stock = stock + value where isbn = bookIsbn;
		end; // 
		delimiter ; 
	*/
}
