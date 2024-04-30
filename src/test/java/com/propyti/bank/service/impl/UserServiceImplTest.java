package com.propyti.bank.service.impl;

import com.propyti.bank.entity.User;
import com.propyti.bank.repository.RoleRepository;
import com.propyti.bank.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Date;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.util.AssertionErrors.assertEquals;

class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private RoleRepository roleRepository;
    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void register() {
        User user = createUser();

        when(userRepository.save(any())).thenReturn(user);

        User createdUser = userService.register(user);

        assertEquals("user id not matched",1L, createdUser.getId());
        verify(userRepository).save(any());
    }

    @Test
    void update() {
        User user = createUser();

        when(userRepository.save(any())).thenReturn(user);

        User createdUser = userService.update(user);

        assertEquals("user id not matched",1L, createdUser.getId());
        verify(userRepository).save(any());
    }

    @Test
    void findByUsername() {
    }

    @Test
    void findById() {
    }

    @Test
    void findAll() {
    }

    @Test
    void delete() {
        User user = createUser();

        userService.delete(user.getId());

        verify(userRepository).deleteById(any());
    }

    private User createUser(){
        return User.builder()
                .id(1L)
                .created(new Date())
                .firstName("Jon")
                .lastName("Doe")
                .email("jon_doe@gmail.com")
                .username("jon_doe")
                .password("supper_secret_pass")
                .build();
    }
}