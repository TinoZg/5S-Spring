package com.goinfozg.ciscenje.repository;

import com.goinfozg.ciscenje.model.Ocjena;
import org.springframework.data.repository.CrudRepository;

import java.sql.Date;

public interface OcjenaRepository extends CrudRepository<Ocjena, Long> {
    Ocjena findByDatum(Date datum);
}
