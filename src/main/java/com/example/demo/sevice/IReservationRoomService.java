package com.example.demo.sevice;

import com.example.demo.model.ReservationRoom;

import java.util.List;

public interface IReservationRoomService {
    ReservationRoom addOrUpdateRes(ReservationRoom res);
    List<ReservationRoom> showAllRoom();

    void deleteRes(long idRes);
}
