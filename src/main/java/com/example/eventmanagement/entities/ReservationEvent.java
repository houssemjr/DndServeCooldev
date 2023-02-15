package com.example.eventmanagement.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservationEvent")
public class ReservationEvent implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRes;
    private Date DateRes;
    private int NbPerson;


//ManyToMany withEvent
    @ManyToMany(fetch = FetchType.EAGER,
    cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    },
    mappedBy = "reservationEvent")
    private Set<Event> events = new HashSet<>();
}
