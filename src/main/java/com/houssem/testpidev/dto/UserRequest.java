package com.houssem.testpidev.dto;

import com.houssem.testpidev.Entity.TypeCompte;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserRequest {
    private Float balance ;
    Date Dateinscription;
    TypeCompte typecompte;
    private String nom;
    private String prenom;
    private String login;
    private String password;
}
