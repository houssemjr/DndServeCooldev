package com.example.pidev.Repositories;

import com.example.pidev.entities.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICommentaireRep extends JpaRepository<Commentaire,Long> {
}
