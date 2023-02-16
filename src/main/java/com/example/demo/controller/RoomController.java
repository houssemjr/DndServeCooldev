package com.example.demo.controller;

import com.example.demo.model.Room;
import com.example.demo.sevice.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room")
public class RoomController {
    @Autowired
    IRoomService roomService;

    @PostMapping("/add")
    public Room addRoom(@RequestBody Room room){
        return roomService.addOrUpdateRoom(room);
    }

    @GetMapping("/show")
    public List<Room> showRoom(){
        return roomService.showAllRoom();
    }

    @DeleteMapping("/delete/{idRoom}")
    public void deleteRoom(@PathVariable("idRoom") long idRoom){
        roomService.deleteRoom(idRoom);
    }


    @PutMapping("/update")
    public Room updateRoom(@RequestBody Room room){
        return roomService.addOrUpdateRoom(room);
    }



}
