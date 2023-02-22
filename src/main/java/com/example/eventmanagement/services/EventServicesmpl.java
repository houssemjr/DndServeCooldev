package com.example.eventmanagement.services;

import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.repositories.IEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class EventServicesmpl  {
@Autowired
    private IEventRepository repository;
    public Event saveEvent (Event event){
        return repository.save(event);    }

    public Iterable<Event> getEvents(){
        return repository.findAll();
    }

    public Event updateEvent(Event event ){
        Event existingEvents = repository.findById(event.getIdEvent()).orElse(null);
        existingEvents.setDescription(event.getDescription());
        existingEvents.setNom(event.getNom());
        existingEvents.setDuration(event.getDuration());
        return repository.save(existingEvents);
    }

    public void  deleteEvent(Long id){
         repository.deleteById(id);
    }
}
