package com.propyti.bank.rest;

import com.propyti.bank.dto.UserDto;
import com.propyti.bank.entity.User;
import com.propyti.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/users/")
public class UserRestControllerV1 {
    private final UserService userService;

    @Autowired
    public UserRestControllerV1(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id){
        User user = userService.findById(id);

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = "{page}/{offset}/{sortBy}")
    public ResponseEntity<List<UserDto>> getPageUsers(
            @PathVariable(name = "page") Integer page,
            @PathVariable(name = "page") Integer offset,
            @PathVariable(name = "sortBy") String sortBy
    ){
        List<User> users = userService.findAll(page, offset, sortBy);

        if(users == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        List<UserDto> result = new ArrayList<>();

        for (User user: users) {
            result.add(UserDto.fromUser(user));
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDto> creatUser(UserDto userDto){
        User user = userService.register(userDto.toUser());

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<UserDto> putUser(UserDto userDto){
        User user = userService.update(userDto.toUser());

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<UserDto> deleteUser(@PathVariable(name = "id") Long id){
        userService.delete(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
