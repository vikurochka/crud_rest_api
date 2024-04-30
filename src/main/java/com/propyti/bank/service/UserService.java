package com.propyti.bank.service;

import com.propyti.bank.entity.User;

import java.util.List;

public interface UserService {
    User register(User user);
    User update(User user);
    User findByUsername(String username);
    User findById(Long id);
    List<User> findAll(Integer page, Integer offset, String sortBy);
    void delete(Long id);
}
