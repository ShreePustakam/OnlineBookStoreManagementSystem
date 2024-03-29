package com.app.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SetBookQtyDTO {

	@NotBlank
	private String isbn;
	
	@NotNull
	private Long userId;
	
	@NotNull
	private int quantity;
}
