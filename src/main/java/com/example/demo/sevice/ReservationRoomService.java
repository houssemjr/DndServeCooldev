package com.example.demo.sevice;

import com.example.demo.model.ReservationRoom;
import com.example.demo.repository.IReservationRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationRoomService implements IReservationRoomService {
    @Autowired
    private IReservationRoomRepository reservationRepository;


    @Override
    public ReservationRoom addOrUpdateRes(ReservationRoom res) {
        return reservationRepository.save(res);
    }

    @Override
    public List<ReservationRoom> showAllRoom() {
        return reservationRepository.findAll();
    }

    @Override
    public void deleteRes(long idRes) {
         ReservationRoom res= reservationRepository.findById(idRes).orElse(null);
        reservationRepository.delete(res);
    }
}
