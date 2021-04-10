package com.example.server.controller;

import com.example.server.model.Cart;
import com.example.server.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping
    public Iterable<Cart> getItems() {
        return cartService.getItems();
    }

    @GetMapping("/{id}")
    public Cart getItemById(@PathVariable Long id) {
        return cartService.getItemById(id);
    }

    @PostMapping
    public Cart createItem(@RequestBody Cart item) {
        return cartService.createItem(item);
    }

    @PatchMapping
    public Cart updateItem(@RequestBody Cart item) {
        return cartService.updateItem(item);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteItem(@PathVariable Long id) {
        return cartService.deleteItem(id);
    }
    
}
