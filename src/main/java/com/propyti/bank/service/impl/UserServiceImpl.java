package com.propyti.bank.service.impl;

import com.propyti.bank.entity.Role;
import com.propyti.bank.entity.Status;
import com.propyti.bank.entity.User;
import com.propyti.bank.repository.RoleRepository;
import com.propyti.bank.repository.UserRepository;
import com.propyti.bank.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
//    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public User register(User user) {
        Role roleUser = roleRepository.findByName("ROLE_USER");
        List<Role> userRoles = new ArrayList<>();
        userRoles.add(roleUser);

        user.setPassword(user.getPassword());
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);

        User registeredUser = userRepository.save(user);

        log.info("IN register - user: {} successfully registered", registeredUser);

        return registeredUser;
    }

    @Override
    public User update(User user) {
        User updatedUser = userRepository.save(user);

        log.info("IN update - user: {} successfully updated", updatedUser);

        return updatedUser;
    }

    @Override
    public User findByUsername(String username) {
        User result = userRepository.getByUsername(username);
        log.info("IN findByUsername - user: {} found by username: {}", result, username);
        return result;
    }

    @Override
    public User findById(Long id) {
        User result = userRepository.findById(id).orElse(null);

        if (result == null) {
            log.warn("IN findById - no user found by id: {}", id);
            return null;
        }

        log.info("IN findById - user: {} found by id: {}", result);
        return result;
    }

    @Override
    public List<User> findAll(Integer page, Integer offset, String sortBy) {
        PageRequest pageable = PageRequest.of(page, offset, Sort.Direction.valueOf(sortBy));
        return (List<User>) userRepository.findAll(pageable);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
        log.info("IN delete - user with id: {} successfully deleted");
    }
}
