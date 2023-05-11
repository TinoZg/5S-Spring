package com.goinfozg.ciscenje.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("OCJENE")
public class Ocjena {
    @Id
    Long id;
    String ime;
    int perilica;
    int sudoper;
    int stednjak;
    int smece;
    int stoloviOrmar;
    Date datum;
    String komentar;
    String kontrola;
}
