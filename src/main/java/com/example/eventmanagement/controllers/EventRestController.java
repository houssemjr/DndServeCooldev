package com.example.eventmanagement.controllers;

import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.services.EventServicesmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class EventRestController {

    @Autowired
     private EventServicesmpl service;
    @PostMapping("/addEvent")
    public Event addEvent(@RequestBody Event event){

        return service.saveEvent(event);
    }
    @GetMapping("/getAllEvents")
    public Iterable<Event> getEvent(){
        return service.getEvents();
    }


    @PutMapping("updateEvent/{id}")
    public Event updateEvent(@PathVariable Long id , @RequestBody Event event){
        Event newEvent = new Event();
        newEvent.setDuration(event.getDuration());
        newEvent.setNom(event.getNom());
        newEvent.setDescription(event.getDescription());
        newEvent.setIdEvent(id);
        return service.updateEvent(newEvent);
    }
    @DeleteMapping("deleteEvent/{id}")
    public void deleteEvent(@PathVariable Long id){
         service.deleteEvent(id);
    }
}
