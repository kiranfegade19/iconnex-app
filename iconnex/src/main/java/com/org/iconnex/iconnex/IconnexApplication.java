package com.org.iconnex.iconnex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAutoConfiguration
@SpringBootApplication
public class IconnexApplication {

	public static void main(String[] args) {
//		SpringApplication.run(IconnexApplication.class, args);
		SpringApplication application = new SpringApplication(IconnexApplication.class);
		application.run(args);

	}

}
