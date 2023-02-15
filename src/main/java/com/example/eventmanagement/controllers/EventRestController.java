package com.example.eventmanagement.controllers;

import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.services.EventServicesmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;


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
    };
    @PutMapping("/{id}/updateEvent")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event){
        return service.updateEvent(event);
    }
}
