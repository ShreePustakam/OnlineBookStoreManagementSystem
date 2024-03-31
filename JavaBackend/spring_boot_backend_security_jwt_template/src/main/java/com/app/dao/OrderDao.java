package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Order;
import com.app.entities.User;
import java.util.List;

public interface OrderDao extends JpaRepository<Order, Long> {
	List<Order> findByUserEmail(String email);
}
