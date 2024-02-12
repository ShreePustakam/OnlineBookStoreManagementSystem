package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.OrderQty;

public interface OrderQtyDao extends JpaRepository<OrderQty, Long> {
	List<OrderQty> findByOrderOrderId(Long orderId);
}
