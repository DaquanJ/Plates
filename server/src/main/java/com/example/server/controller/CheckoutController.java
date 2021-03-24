package com.example.server.controller;

import com.example.server.model.Checkout;
import com.example.server.service.CheckoutService;
import org.hibernate.annotations.Check;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/checkout")
public class CheckoutController {

    @Autowired
    CheckoutService checkoutService;

    @GetMapping
    public Iterable<Checkout> getInfo() {
        return checkoutService.getInfo();
    }

    @GetMapping("/{id}")
    public Checkout getInfoById(@PathVariable Long id) {
        return checkoutService.getInfoById(id);
    }

    @PostMapping
    public Checkout createInfo(@RequestBody Checkout info) {
        return checkoutService.createInfo(info);
    }

    @PatchMapping
    public Checkout updateInfo(@RequestBody Checkout info) {
        return checkoutService.updateInfo(info);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteInfo(@PathVariable Long id) {
       return checkoutService.deleteInfo(id);
    }

}
