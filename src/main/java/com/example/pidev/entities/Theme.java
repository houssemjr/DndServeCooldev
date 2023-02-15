package com.example.pidev.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Setter
@RequiredArgsConstructor
@Getter
public class Theme implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idT;
    private String NameT;
    @ManyToOne
    Publication publication ;
    @JsonIgnore
    @OneToMany(mappedBy = "theme")
    List<Commentaire> commentaires;


}
