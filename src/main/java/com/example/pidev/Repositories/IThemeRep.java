package com.example.pidev.Repositories;

import com.example.pidev.entities.Theme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IThemeRep extends JpaRepository<Theme,Long> {
}
