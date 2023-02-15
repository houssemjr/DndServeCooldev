package com.example.pidev.Services;

import com.example.pidev.Repositories.ICommentaireRep;
import com.example.pidev.Repositories.IPublicationRep;
import com.example.pidev.Repositories.IThemeRep;
import com.example.pidev.entities.Commentaire;
import com.example.pidev.entities.Publication;
import com.example.pidev.entities.Theme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ForumService implements IForumService{
    @Autowired
    IPublicationRep PublicationRep;
    @Autowired
    ICommentaireRep CommentaireRep;
    @Autowired
    IThemeRep ThemeRep;

    @Override
    public Publication ajouterPublication(Publication publication) {

        return PublicationRep.save(publication);
    }
    @Override
    public Commentaire ajouterCommentaire(Commentaire commentaire) {

        return CommentaireRep.save(commentaire);
    }
    @Override
    public Theme ajouterTheme(Theme theme) {

        return ThemeRep.save(theme);
    }
    @Override
    public List<Publication> afficherPublication() {
        List<Publication> lp = PublicationRep.findAll();

        return lp;
    }

    @Override
    public Publication updatepub(Long idp) {
        Publication p =PublicationRep.findById(idp).orElse(null);
        return PublicationRep.save(p);
    }

    @Override
    public void deletepub(Long idp) {
        Publication p=PublicationRep.findById(idp).orElse(null);
        PublicationRep.delete(p);
    }

    @Override
    public List<Theme> afficherTheme() {
      List<Theme>  th = ThemeRep.findAll();
        return th;
    }

    @Override
    public List<Commentaire> afficherCommentaire() {
       List<Commentaire> c=CommentaireRep.findAll();
        return c;
    }

    @Override
    public Theme updateTheme(Long idt) {
        Theme th =ThemeRep.findById(idt).orElse(null);
        return ThemeRep.save(th);    }

    @Override
    public Commentaire updateCommentaire(Long idc) {
        Commentaire c =CommentaireRep.findById(idc).orElse(null);
        return CommentaireRep.save(c);
    }

    @Override
    public void deletetheme(Long idt) {
        Theme th=ThemeRep.findById(idt).orElse(null);
        ThemeRep.delete(th);

    }

    @Override
    public void deletecommentaire(Long idc) {
        Commentaire c=CommentaireRep.findById(idc).orElse(null);
        CommentaireRep.delete(c);

    }


}
