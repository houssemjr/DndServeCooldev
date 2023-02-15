package com.example.pidev.Services;

import com.example.pidev.entities.Commentaire;
import com.example.pidev.entities.Publication;
import com.example.pidev.entities.Theme;

import java.util.List;

public interface IForumService {
    public Publication ajouterPublication (Publication publication);
    public Commentaire ajouterCommentaire (Commentaire commentaire);
    public Theme ajouterTheme (Theme theme);
    public List<Publication> afficherPublication();
    public Publication updatepub(Long idp);
    public void deletepub(Long idp);
    public List<Theme> afficherTheme();
    public List<Commentaire> afficherCommentaire();
    public Theme updateTheme (Long idt);
    public Commentaire updateCommentaire(Long idc);
    public void deletetheme (Long idt);
    public void deletecommentaire (Long idc);
}

