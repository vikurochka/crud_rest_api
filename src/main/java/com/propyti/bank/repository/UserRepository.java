package com.propyti.bank.repository;

import com.propyti.bank.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
//    Optional<User> findById(Long id);
    User getByUsername(String username);
//    Page<User> findAll(PageRequest pageable);
}
