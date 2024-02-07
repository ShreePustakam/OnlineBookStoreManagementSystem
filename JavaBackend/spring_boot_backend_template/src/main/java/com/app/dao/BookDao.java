package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Book;
import com.app.entities.Genre;

public interface BookDao extends JpaRepository<Book, String> {
	
    List<Book> findByGenre(Genre genre);
}
