package com.example.server.repository;

import com.example.server.model.Checkout;
import org.springframework.data.repository.CrudRepository;

public interface CheckoutRepository extends CrudRepository<Checkout,Long> {
}
