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
    return new ModelAndView("evaluation/index");
  }

}
