package com.propyti.bank.entity;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "phone")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Phone extends BaseEntity {

    private String operator;
    private String phone;

    @OneToOne(mappedBy = "phone")
    private User user;

    @Override
    public String toString() {
        return "Phone{" +
                "operator='" + operator + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
