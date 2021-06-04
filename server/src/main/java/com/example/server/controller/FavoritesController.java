package com.example.server.controller;


import com.example.server.model.Favorites;
import com.example.server.service.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/favorites")
public class FavoritesController {

    @Autowired
    FavoritesService favoritesService;

    @GetMapping
    public Iterable<Favorites> getItems() {
        return favoritesService.getItems();
    }

    @GetMapping("/{id}")
    public Favorites getItemById(@PathVariable Long id) {
        return favoritesService.getItemById(id);
    }

    @PostMapping
    public Favorites createItem(@RequestBody Favorites item) {
        return favoritesService.createItem(item);
    }

    @PatchMapping
    public Favorites updateItem(@RequestBody Favorites item) {
        return favoritesService.updateItem(item);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteItem(@PathVariable Long id) {
        return favoritesService.deleteItem(id);
    }

}
