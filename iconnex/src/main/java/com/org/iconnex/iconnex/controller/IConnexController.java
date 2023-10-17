package com.org.iconnex.iconnex.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/iconnex")
public class IConnexController {


    @GetMapping("/*")
    public RedirectView home() {
        return new RedirectView("/");
    }


}
