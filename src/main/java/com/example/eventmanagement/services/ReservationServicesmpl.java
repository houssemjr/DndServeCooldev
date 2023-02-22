package com.example.eventmanagement.services;

import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.repositories.IReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServicesmpl {
    @Autowired
    private IReservationRepository reservationRepository;

    public ReservationEvent addReservation(ReservationEvent reservation){

        return reservationRepository.save(reservation);
    }

    public Iterable<ReservationEvent>getReservations(){
        return reservationRepository.findAll();
    }

    public ReservationEvent updateReservation(ReservationEvent reservation){
        ReservationEvent toBeUpdated = reservationRepository.findById(reservation.getIdRes()).orElse(null);
        toBeUpdated.setNbPerson(reservation.getNbPerson());
        toBeUpdated.setDateRes(reservation.getDateRes());
        return reservationRepository.save(toBeUpdated);
    }
    public void deleteReservation(Long id){
        reservationRepository.deleteById(id);
    }
}
