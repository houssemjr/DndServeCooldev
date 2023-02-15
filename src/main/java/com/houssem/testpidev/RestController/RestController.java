package com.houssem.testpidev.RestController;

import com.houssem.testpidev.dto.UserRequest;
import com.houssem.testpidev.dto.UserResponse;
import com.houssem.testpidev.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@org.springframework.web.bind.annotation.RestController

@RequestMapping("user")
public class RestController {
    @Autowired
    UserService userService;
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)

    public void Signup(@RequestBody UserRequest userRequest){
        userService.Signup(userRequest);

    }
    @GetMapping("/show")
    @ResponseStatus(HttpStatus.OK)
    public List<UserResponse>getAllUsers(){
        return userService.GetAllUsers();


    }
}
