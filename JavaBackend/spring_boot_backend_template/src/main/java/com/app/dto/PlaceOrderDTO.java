package com.app.dto;

import java.time.LocalDate;


import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entities.OStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceOrderDTO {

	private Long orderId;
		
	@Enumerated(EnumType.STRING)
	private OStatus oStatus;
	
	private LocalDate oDate;

	private LocalDate dDate;

	private double totalAmount;

}
