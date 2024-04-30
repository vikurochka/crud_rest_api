package com.propyti.bank.rest;

import com.propyti.bank.repository.RoleRepository;
import com.propyti.bank.repository.UserRepository;
import com.propyti.bank.service.impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class UserRestControllerV1Test {

    @Mock
    private UserServiceImpl userService;

    @InjectMocks
    private UserRestControllerV1 userController;

    @InjectMocks
    private TestRestTemplate restTemplate;

    @Mock
    private RoleRepository roleRepository;
    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @Mock
    private UserRepository userRepository;

    @Test
    void getUserByIdPerformanceTest() {
        long startTime = System.currentTimeMillis();

        // Make an HTTP request to the endpoint
        ResponseEntity<String> responseEntity = restTemplate.getForEntity("/api/v1/users/1", String.class);

        long endTime = System.currentTimeMillis();
        long responseTime = endTime - startTime;

        // Assert that the response time is within acceptable limits
        assertThat(responseTime).isLessThan(500);
    }
}