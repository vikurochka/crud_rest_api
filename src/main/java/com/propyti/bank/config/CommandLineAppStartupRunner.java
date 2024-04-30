package com.propyti.bank.config;

import com.propyti.bank.entity.Phone;
import com.propyti.bank.entity.Role;
import com.propyti.bank.entity.User;
import com.propyti.bank.repository.RoleRepository;
import com.propyti.bank.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
@AllArgsConstructor
public class CommandLineAppStartupRunner implements CommandLineRunner {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;


    @Override
    public void run(String...args) throws Exception {
        Role roleUser = Role.builder()
                .name("ROLE_USER")
                .build();

//        Role roleUser = roleRepository.findByName("ROLE_USER");
        Phone phone = Phone.builder()
                .phone("0667454545")
                .operator("Kyivstar")
                .build();

        User admin = User.builder()
                .password("pass")
//                .password(passwordEncoder.encode("pass"))
                .firstName("Jon")
                .lastName("Doe")
                .username("jon_doe")
                .email("jon_doe@gmail.com")
                .roles(Collections.singletonList(roleUser))
                .phone(phone)
                .build();

        phone.setUser(admin);
        roleUser.setUsers(Collections.singletonList(admin));
        roleRepository.save(roleUser);
        userRepository.save(admin);
    }
}
