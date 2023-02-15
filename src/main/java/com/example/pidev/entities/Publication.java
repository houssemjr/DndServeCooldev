package com.example.pidev.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Setter
@RequiredArgsConstructor
@Getter
public class Publication implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idP;
    private String Name;
    @Temporal(TemporalType.DATE)
    private Date Date;
    @JsonIgnore
    @OneToMany(mappedBy = "publication")
    List<Theme> themes;

}
