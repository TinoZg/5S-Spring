package com.goinfozg.ciscenje;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.sql.SQLException;

@SpringBootApplication
@EnableScheduling
public class CiscenjeApplication {

    public static void main(String[] args) throws SQLException {
        SpringApplication.run(CiscenjeApplication.class, args);

        // Za vraćanje backup-a.
        //RunScript.execute("jdbc:h2:./5s", "", "", "C:\\Users\\Kristijan\\Desktop\\backup .sql", null, false);
    }

}