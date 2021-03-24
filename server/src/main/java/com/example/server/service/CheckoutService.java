package com.example.server.service;

import com.example.server.model.Checkout;
import com.example.server.repository.CheckoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CheckoutService {

    @Autowired
    CheckoutRepository checkoutRepository;

    public Iterable<Checkout> getInfo() {
        return checkoutRepository.findAll();
    }

    public Checkout getInfoById(Long id) {
        return checkoutRepository.findById(id).get();
    }

    public Checkout createInfo(Checkout info) {
        return checkoutRepository.save(info);
    }

    public Checkout updateInfo(Checkout info) {
        return checkoutRepository.save(info);
    }

    public HttpStatus deleteInfo(Long id) {
        checkoutRepository.deleteById(id);
        return HttpStatus.OK;
    }

}
