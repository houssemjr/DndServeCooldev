package com.example.pidev.entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Setter
@RequiredArgsConstructor
@Getter

public class Commentaire implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idC;
    private String title;
    private String message;
    @ManyToOne
    Theme theme ;

}
