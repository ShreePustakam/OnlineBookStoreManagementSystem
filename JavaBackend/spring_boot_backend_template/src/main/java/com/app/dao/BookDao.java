package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Book;
import com.app.entities.Genre;

public interface BookDao extends JpaRepository<Book, String> {
	
    List<Book> findByGenre(Genre genre);
    
    @Query(value = "select * from books where title like %:word% or author like %:word%", nativeQuery = true)
	List<Book> findByTitleOrAuthor(String word);
}
