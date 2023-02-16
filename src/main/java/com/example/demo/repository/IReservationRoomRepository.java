package com.example.demo.repository;

import com.example.demo.model.ReservationRoom;
import com.example.demo.model.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IReservationRoomRepository extends MongoRepository<ReservationRoom,Long> {
}
