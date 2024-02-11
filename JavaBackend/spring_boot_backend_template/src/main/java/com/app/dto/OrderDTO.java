package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import com.app.entities.OStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
	@NotNull
	private Long orderId;
	
	@Enumerated(EnumType.STRING)
	private OStatus oStatus;
	
	private LocalDate oDate;
	
	private LocalDate dDate;
	
	private double totalAmount;
}
