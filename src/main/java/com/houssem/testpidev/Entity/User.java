package com.houssem.testpidev.Entity;

import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long idUser;
    private Float balance ;
    @Temporal(TemporalType.DATE)
    Date Dateinscription;
    @Enumerated(EnumType.STRING)
    TypeCompte typecompte;
    private String nom;
    private String prenom;
    private String login;
    private String password;



}
