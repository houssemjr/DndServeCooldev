package com.example.pidev.Controllers;

import com.example.pidev.Services.IForumService;
import com.example.pidev.entities.Commentaire;
import com.example.pidev.entities.Publication;
import com.example.pidev.entities.Theme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("App")
public class Controller {
    @Autowired
    IForumService forumService;
    @PostMapping("/addP")
    public Publication ajouterPublication(@RequestBody Publication publication){
         return forumService.ajouterPublication(publication);
    }
    @PostMapping("/addC")
    public Commentaire ajouterCommentaire(@RequestBody Commentaire commentaire){
        return forumService.ajouterCommentaire(commentaire);
    }
    @PostMapping("/addT")
    public Theme ajouterTheme(@RequestBody Theme theme ){
        return forumService.ajouterTheme(theme);
    }
    @GetMapping("/AfficherP")
    public List<Publication> afficherPublication(){
        return forumService.afficherPublication();
    }
    @DeleteMapping("/DeleteP")
    public void deletepub(@PathVariable Long idp){
        forumService.deletepub(idp);

    }
    @PutMapping("/UpdateP")
    public Publication updatepub(@PathVariable Long idp){
        return forumService.updatepub(idp);
    }
    @GetMapping("/AfficherT")
    public List<Theme> afficherTheme(){
        return forumService.afficherTheme();
    }
    @DeleteMapping("/DeleteT")
    public void deletetheme(@PathVariable Long idt){
        forumService.deletetheme(idt);

    }
    @PutMapping("/UpdateT")
    public Theme updateTheme(@PathVariable Long idt){
        return forumService.updateTheme(idt);
    }
    @GetMapping("/AfficherC")
    public List<Commentaire> afficherCommentaire(){
        return forumService.afficherCommentaire();
    }
    @DeleteMapping("/DeleteC")
    public void  deletecommentaire(@PathVariable Long idc){
        forumService.deletecommentaire(idc);

    }
    @PutMapping("/UpdateC")
    public Commentaire updateCommentaire(@PathVariable Long idc){
        return forumService.updateCommentaire(idc);
    }

}
