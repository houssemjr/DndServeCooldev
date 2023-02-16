package com.example.demo.sevice;

import com.example.demo.model.Room;

import java.util.List;

public interface IRoomService {

    Room addOrUpdateRoom(Room room);
    List<Room> showAllRoom();

    void deleteRoom(long idRoom);




}
