package kr.fscom.esg.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/post")
public class PostModelController {

  @GetMapping
  public ModelAndView postWritePage() {
    return new ModelAndView("post/index");
  }

  @GetMapping("/:id")
  public ModelAndView postDetailsPage() {
    return new ModelAndView("post/details");
  }
}
