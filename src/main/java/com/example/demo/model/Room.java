package com.example.demo.model;

import lombok.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToOne;


@Document(value="room")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class Room {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long idRoom;
    private int Capacity;
    private boolean State;

    @ManyToOne
    private ReservationRoom reservationRoom;
}
