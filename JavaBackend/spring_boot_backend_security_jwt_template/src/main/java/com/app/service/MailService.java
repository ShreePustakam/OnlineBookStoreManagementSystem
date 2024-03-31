package com.app.service;

import com.app.entities.Order;

public interface MailService {

	void sendMailToCustomer(Order placedOrder);

}
