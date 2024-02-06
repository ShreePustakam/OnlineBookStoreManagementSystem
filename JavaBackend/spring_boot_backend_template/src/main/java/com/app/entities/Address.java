package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
	@Id
	private Long id;
	@Column(length = 50)
	private String streetArea;
	@Column(length = 50)
	private String city;
	@Enumerated(EnumType.STRING)
	@Column(length = 50)
	private State state;
	@Column
	private int pincode;
	
	@OneToOne
	@JoinColumn(name="c_id",nullable=false)
	@MapsId
	private Customer customer;
	
}
