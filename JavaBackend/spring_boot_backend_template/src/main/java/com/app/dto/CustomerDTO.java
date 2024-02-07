package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {
	
	@NotBlank
	private String customerName;
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String phoneNo;
	
	@NotBlank
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
}
