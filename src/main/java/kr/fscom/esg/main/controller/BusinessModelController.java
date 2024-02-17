package kr.fscom.esg.main.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/business")
public class BusinessModelController {

  @GetMapping
  public ModelAndView redirectMain() {
    return new ModelAndView("/business/advisor");
  }

  @GetMapping("/adv")
  public ModelAndView advisorPage() {
    return new ModelAndView("/business/advisor");
  }

  @GetMapping("/edu")
  public ModelAndView educationPage() {
    return new ModelAndView("/business/education");
  }

}
