package com.example.server.service;

import com.example.server.model.Favorites;
import com.example.server.repository.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class FavoritesService {

    @Autowired
    private FavoritesRepository favoritesRepository;

    public Iterable<Favorites> getItems() {
        return favoritesRepository.findAll();
    }

    public Favorites getItemById(Long id) {
        return favoritesRepository.findById(id).get();
    }

    public Favorites createItem(Favorites item) {
        return favoritesRepository.save(item);
    }

    public Favorites updateItem(Favorites item) {
        return favoritesRepository.save(item);
    }

    public HttpStatus deleteItem(Long id) {
       favoritesRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
