package com.example.demo.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Document(value="reservationRoom")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class ReservationRoom {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long idReservation;
    private Date dateReservation;
    private int duration;
    private int nbPerson;


}
