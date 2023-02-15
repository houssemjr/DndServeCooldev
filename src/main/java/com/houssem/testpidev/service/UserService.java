package com.houssem.testpidev.service;

import com.houssem.testpidev.Entity.User;
import com.houssem.testpidev.Repository.userRepository;
import com.houssem.testpidev.dto.UserRequest;
import com.houssem.testpidev.dto.UserResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService implements UserServiceInterface {
@Autowired
    userRepository userrepo;
    @Override
    public void Signup(UserRequest userrequest) {
        User user = User.builder()
                .nom(userrequest.getNom())
                .prenom(userrequest.getPrenom())
                .balance(userrequest.getBalance())
                .login(userrequest.getLogin())
                .password(userrequest.getPassword())
                .Dateinscription(userrequest.getDateinscription())
                .build();
        userrepo.save(user);
        log.info("SIGNED UP SUCCESFULLY");
    }

    @Override
    public List<UserResponse> GetAllUsers() {
        List<User> users=userrepo.findAll();
        return users.stream().map(this::mapToUserResponse).toList();

    }
    private UserResponse mapToUserResponse(User user){
        return UserResponse.builder().
                idUser(user.getIdUser())
                .nom(user.getNom())
                .prenom(user.getPrenom())
                .balance(user.getBalance())
                .Dateinscription(user.getDateinscription())
                .login(user.getLogin())
                .password(user.getPassword())
                .typecompte(user.getTypecompte())
                .build();


    }
}
