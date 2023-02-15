package com.example.eventmanagement.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="events")
public class Event  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Long idEvent;
    private String description;
    private String nom;
    private int duration;


//ManyToMany with ReservationEvent
    @ManyToMany(fetch=FetchType.EAGER, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE
    })
    @JoinTable(name = "Event_Reservation",
    joinColumns = {@JoinColumn(name = "event_id")},
    inverseJoinColumns = {@JoinColumn(name = "reservation_id")})

    private Set<ReservationEvent> reservationEvent = new HashSet<>();


//OneToOne with Location

    @OneToOne(fetch = FetchType.EAGER,
    cascade = CascadeType.ALL,
    mappedBy = "event")
    private Location location;



    public Long getIdEvent() {
        return idEvent;
    }

    public String getDescription() {
        return description;
    }

    public String getNom() {
        return nom;
    }

    public int getDuration() {
        return duration;
    }

    public void setIdEvent(Long idEvent) {
        this.idEvent = idEvent;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
}
