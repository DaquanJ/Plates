package com.example.server.service;

import com.example.server.model.Cart;
import com.example.server.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Iterable<Cart> getItems() {
        return cartRepository.findAll();
    }

    public Cart getItemById(Long id) {
        return cartRepository.findById(id).get();
    }

    public Cart createItem(Cart item) {
        return cartRepository.save(item);
    }

    public Cart updateItem(Cart item) {
        return cartRepository.save(item);
    }

    public HttpStatus deleteItem(Long id) {
        cartRepository.deleteById(id);
        return HttpStatus.OK;
    }

}
