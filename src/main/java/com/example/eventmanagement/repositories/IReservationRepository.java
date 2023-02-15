package com.example.eventmanagement.repositories;

import com.example.eventmanagement.entities.ReservationEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservationRepository extends CrudRepository<ReservationEvent, Long> {
}
