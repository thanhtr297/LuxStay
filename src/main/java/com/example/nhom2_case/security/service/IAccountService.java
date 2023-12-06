package com.example.nhom2_case.security.service;


import com.example.nhom2_case.model.Account;

public interface IAccountService {
    Account findByUsername(String username);

    Account toDTO(Account account);

    void save(Account user);
    void addAcc(Account account) ;

    Account findById(Long id);

}
