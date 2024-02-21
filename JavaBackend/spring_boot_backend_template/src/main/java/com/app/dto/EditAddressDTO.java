package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entities.State;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EditAddressDTO {
	
private String streetArea;
	
	private String city;
	
	@Enumerated(EnumType.STRING)
	private State state;
	
	private int pincode;
	
}
