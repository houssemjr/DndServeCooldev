package com.example.pidev.Repositories;

import com.example.pidev.entities.Publication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPublicationRep extends JpaRepository<Publication,Long> {
}
