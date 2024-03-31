package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.app.dto.EditUserDTO;
import com.app.dto.LoginRequestDTO;
import com.app.dto.SigninResponse;
import com.app.dto.UserDTO;
import com.app.dto.UserPasswordDTO;
import com.app.security.JwtUtils;
import com.app.service.UserService;

@RestController
@RequestMapping("/customer")
@Validated
//@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtUtils utils;

	@Autowired
	private AuthenticationManager mgr;
	
	

	// REST API for new customer signup
	@PostMapping("/signup")
	public ResponseEntity<?> customerSignUp(@RequestBody @Valid UserDTO newCustomer) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addCustomer(newCustomer));
	}

	// REST API for customer Login
	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody @Valid LoginRequestDTO reqDTO) {
//		try {
//			UserDTO dto = userService.loginUser(reqDTO);
//			return ResponseEntity.ok(dto);
//		} catch (Exception e) {
//			return ResponseEntity.ok(new ApiResponse("Invalid Username or Password"));
//		}
		
		
		System.out.println("in signin " + reqDTO);
		// simply invoke authentucate(...) on AuthMgr
		// i/p : Authentication => un verifed credentials
		// i/f --> Authentication --> imple by UsernamePasswordAuthToken
		// throws exc OR rets : verified credentials (UserDetails i.pl class: custom
		// user details)

		Authentication verifiedAuth = mgr
				.authenticate(new UsernamePasswordAuthenticationToken
						(reqDTO.getEmail(), reqDTO.getPassword()));
		System.out.println(verifiedAuth.getClass());// Custom user details
		// => auth success
		UserDTO dto = userService.findProfile(reqDTO.getEmail());
		return ResponseEntity
				.ok(new SigninResponse(utils.generateJwtToken(verifiedAuth), "Successful Authentication!!!", dto));

	}

	// REST API to display Customer profile
	@GetMapping
	public ResponseEntity<?> showProfile() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.showProfile(authentication.getPrincipal().toString()));
	}

	// REST API to edit customer details
	@PutMapping("/edit")
	public ResponseEntity<?> editCustomer(@RequestBody @Valid EditUserDTO editCustomer) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.editCustomer(authentication.getPrincipal().toString(), editCustomer));
	}

	// REST API to change customer password
	@PutMapping("/pwd")
	public ResponseEntity<?> changePassword(@RequestBody @Valid UserPasswordDTO newPaasword) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.changePassword(authentication.getPrincipal().toString(), newPaasword));
	}

	// REST API to add book to wishlist
	@PostMapping("/wishlist/{isbn}")
	public ResponseEntity<?> addtoWishlist(@PathVariable @Valid String isbn) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.addToWishlist(authentication.getPrincipal().toString(), isbn));
	}

	// REST API to display wishlist
	@GetMapping("/wishlist")
	public ResponseEntity<?> customerWishlist() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.displayWishlist(authentication.getPrincipal().toString()));
	}

	// REST API to remove wishlist
	@DeleteMapping("/wishlist/{isbn}")
	public ResponseEntity<?> removeFromCart(@PathVariable @Valid String isbn) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.removeFromWishlist(authentication.getPrincipal().toString(), isbn));
	}

	// REST API to Find user by id
	@GetMapping("/id")
	public ResponseEntity<?> findProfile(@PathVariable @Valid Long cId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return ResponseEntity.status(HttpStatus.OK).body(userService.findProfile(authentication.getPrincipal().toString()));
	}
}
