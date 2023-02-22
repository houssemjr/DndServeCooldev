package com.example.eventmanagement.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservationEvent")
public class ReservationEvent implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idRes;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date DateRes;
    private int NbPerson;

    public void setIdRes(Long idRes) {
        this.idRes = idRes;
    }

    public void setDateRes(Date dateRes) {
        DateRes = dateRes;
    }

    public void setNbPerson(int nbPerson) {
        NbPerson = nbPerson;
    }

    public Long getIdRes() {
        return idRes;
    }

    public Date getDateRes() {
        return DateRes;
    }

    public int getNbPerson() {
        return NbPerson;
    }

    //ManyToMany withEvent
    @ManyToMany(fetch = FetchType.EAGER,
    cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    },
    mappedBy = "reservationEvent")
    private Set<Event> events = new HashSet<>();

    public ReservationEvent() {
    }
}

