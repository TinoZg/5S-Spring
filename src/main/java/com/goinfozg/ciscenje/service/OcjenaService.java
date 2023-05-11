package com.goinfozg.ciscenje.service;

import com.goinfozg.ciscenje.model.Ocjena;
import com.goinfozg.ciscenje.repository.OcjenaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class OcjenaService {


    private final OcjenaRepository ocjenaRepository;


    @Autowired
    public OcjenaService(OcjenaRepository ocjenaRepository) {
        this.ocjenaRepository = ocjenaRepository;
    }


    public Ocjena get(Date datum) {
        Ocjena ocjena = ocjenaRepository.findByDatum(datum);
        return ocjena;
    }

    public void saveOcjena(Ocjena ocjena) {
        Ocjena oldOcjena = ocjenaRepository.findByDatum(ocjena.getDatum());
        if (oldOcjena != null)
            ocjena.setId(oldOcjena.getId());
        ocjenaRepository.save(ocjena);
    }
}
