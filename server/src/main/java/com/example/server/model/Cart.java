package com.example.server.model;


import javax.persistence.*;

@Entity
@Table(name="cart")
public class Cart {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String image;

    @Column
    private String description;

    @Column
    private String price;



}
