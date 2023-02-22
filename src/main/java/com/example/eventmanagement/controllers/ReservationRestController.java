package com.example.eventmanagement.controllers;

import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.services.ReservationServicesmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReservationRestController {
    @Autowired
    private ReservationServicesmpl reservationService;

    @PostMapping("/addReservation")
    public ReservationEvent addReservation(@RequestBody ReservationEvent reservation){
       // System.out.println(reservation);
        return reservationService.addReservation(reservation);

    }

    @GetMapping("/getAllReservations")
    public Iterable<ReservationEvent>getAllReservation(){
        return reservationService.getReservations();
    }

    @PutMapping("/updateReservation/{id}")
    public ReservationEvent updateReservation (@PathVariable Long id , @RequestBody ReservationEvent reservation){
        ReservationEvent Reserve = new ReservationEvent();
        Reserve.setIdRes(id);
        Reserve.setDateRes(reservation.getDateRes());
        Reserve.setNbPerson(reservation.getNbPerson());
       // System.out.println(Reserve);
        return reservationService.updateReservation(Reserve);
    }

    @DeleteMapping("deleteReservation/{id}")
    public void deleteReservation(@PathVariable Long id){
        reservationService.deleteReservation(id);
    }
}
