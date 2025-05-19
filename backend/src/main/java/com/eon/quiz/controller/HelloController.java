package com.eon.quiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public ResponseEntity<Map<String, String>> hello() {
        //Dummy command for deployment-testing - Added Deployment
        return ResponseEntity.ok(Map.of("message", "Hello from Spring Boot"));
    }
}