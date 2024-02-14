package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface UserDao extends JpaRepository<User, Long> {

	public User findByEmail(String email);
}
