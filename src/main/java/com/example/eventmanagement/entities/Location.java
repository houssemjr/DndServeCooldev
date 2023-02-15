package com.example.eventmanagement.entities;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name = "location")
public class Location implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idSalle;
    private  int capacity;
    private Boolean State;
    private int NumSalle;

//OneToOne with Event

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="event_id", nullable = false)
    private Event event;



    public Long getIdSalle() {
        return idSalle;
    }

    public void setIdSalle(Long idSalle) {
        this.idSalle = idSalle;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Boolean getState() {
        return State;
    }

    public void setState(Boolean state) {
        State = state;
    }

    public int getNumSalle() {
        return NumSalle;
    }

    public void setNumSalle(int numSalle) {
        NumSalle = numSalle;
    }
}
