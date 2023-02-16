package com.example.demo.sevice;

import com.example.demo.model.Room;
import com.example.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class RoomService implements IRoomService{

    @Autowired
    private RoomRepository roomRepository;

    public Room addOrUpdateRoom(Room room){
        return roomRepository.save(room);
    }

    @Override
    public List<Room> showAllRoom() {
        List<Room> rooms=roomRepository.findAll();
        return rooms;
    }

    @Override
    public void deleteRoom(long idRoom) {
        Room room = roomRepository.findById(idRoom).orElse(null);
        roomRepository.delete(room);
    }





}
