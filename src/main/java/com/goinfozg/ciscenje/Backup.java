package com.goinfozg.ciscenje;

import org.h2.tools.Script;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

@Component
public class Backup {
    @Scheduled(fixedDelay = 24, timeUnit = TimeUnit.HOURS)
    public void backupDB() {
        try {
            Connection connection = DriverManager.getConnection("jdbc:h2:./5s", "", "");
            Script.process(connection, "backup.sql", "", "");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
