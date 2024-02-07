package com.app.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EditCustomerDTO {
	
	@NotBlank
	private String customerName;
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String phoneNo;
	
}
