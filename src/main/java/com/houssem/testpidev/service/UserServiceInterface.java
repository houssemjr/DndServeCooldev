package com.houssem.testpidev.service;

import com.houssem.testpidev.dto.UserRequest;
import com.houssem.testpidev.dto.UserResponse;

import java.util.List;

public interface UserServiceInterface {

    public void Signup (UserRequest userrequest);
    public List<UserResponse>GetAllUsers();
}
