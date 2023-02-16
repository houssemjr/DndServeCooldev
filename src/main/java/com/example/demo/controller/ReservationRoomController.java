package com.example.demo.controller;

import com.example.demo.model.ReservationRoom;
import com.example.demo.model.Room;
import com.example.demo.sevice.IReservationRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resRoom")
public class ReservationRoomController {
    @Autowired
    IReservationRoomService resService ;

    @PostMapping("/add")
    public ReservationRoom addReservation(@RequestBody ReservationRoom res){
        return resService.addOrUpdateRes(res);
    }

    @GetMapping("/show")
    public List<ReservationRoom> showReservation(){
        return resService.showAllRoom();
    }

    @DeleteMapping("/delete/{idRes}")
    public void deleteReservation(@PathVariable("idRes") long idRes){
        resService.deleteRes(idRes);
    }


    @PutMapping("/update")
    public ReservationRoom updateResrvation(@RequestBody ReservationRoom res){
        return resService.addOrUpdateRes(res);
    }
}
