package com.goinfozg.ciscenje;

import com.goinfozg.ciscenje.model.Ocjena;
import com.goinfozg.ciscenje.service.OcjenaService;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class Controller {

    private final OcjenaService ocjenaService;

    public Controller(OcjenaService ocjenaService) {
        this.ocjenaService = ocjenaService;
    }



    @GetMapping("ocjene/{datum}")
    public Ocjena getOcjena(@PathVariable Date datum) {
        return ocjenaService.get(datum);
    }

    @PostMapping("ocjene")
    public void createOcjena(@RequestBody Ocjena ocjena) {
        ocjenaService.saveOcjena(ocjena);
    }
}
