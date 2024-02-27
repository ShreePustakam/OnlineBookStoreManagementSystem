package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.entities.*;
@Service
@Transactional
public class MailServiceImpl implements MailService {
	
	@Autowired 
	private UserDao userDao;
	@Autowired 
	private JavaMailSender javaMailSender;
	@Value("${spring.mail.username}")
	private String email;


	@Override
	public void sendMailToCustomer(Order placedOrder) {
//		userDao.findById(placedOrder.getCustomer().getId()).orElse
		SimpleMailMessage message = new SimpleMailMessage(); 
		String customerMail = placedOrder.getUser().getEmail();
		
			message.setFrom(email);
	        message.setTo(customerMail); 
	        message.setSubject("Your Pustakam order has been placed!"); 
	        String reply= "Hello "+placedOrder.getUser().getUserName() +",\n\nOrder Placed Successfully!! \n\nOrder Id:"+placedOrder.getOrderId()+"\nOrder Date: "+placedOrder.getODate()+"\nExpected Delivery Date: "+placedOrder.getDDate()+"\nOrder Amount: "+placedOrder.getTotalAmount()+"\n\nThank You for your Order!"+"\n\nTo view your bill details click on the link given below: \n"+"http://localhost:3000/bill?oId="+placedOrder.getOrderId();
	        message.setText(reply);
	        javaMailSender.send(message);
		
	}


}
