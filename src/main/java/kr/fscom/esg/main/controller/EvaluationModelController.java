package kr.fscom.esg.main.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/evaluation")
public class EvaluationModelController {

  @GetMapping
  public ModelAndView evalPage() {
    return new ModelAndView("/eval/index");
  }

  @GetMapping("/awards")
  public ModelAndView awardsPage() {
    return new ModelAndView("/eval/awards");
  }

  @GetMapping("/consult")
  public ModelAndView consultingPage() {
    return new ModelAndView("/eval/consult");
  }

  @GetMapping("/research")
  public ModelAndView researchPage() {
    return new ModelAndView("/eval/research");
  }

  @GetMapping("/edu")
  public ModelAndView educationPage() {
    return new ModelAndView("/eval/edu");
  }

  @GetMapping("/cert")
  public ModelAndView certificationPage() {
    return new ModelAndView("/eval/cert");
  }

}
