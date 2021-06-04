package com.example.server.repository;

import com.example.server.model.Favorites;
import org.springframework.data.repository.CrudRepository;

public interface FavoritesRepository extends CrudRepository<Favorites, Long> { }
