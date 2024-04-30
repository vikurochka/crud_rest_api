package com.propyti.bank.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "score")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Score extends BaseEntity {
    private String currency;
    private Double value;

    @OneToOne(mappedBy = "score")
    private User user;

    @Override
    public String toString() {
        return "Score{" +
                "currency='" + currency + '\'' +
                ", value=" + value +
                '}';
    }
}
