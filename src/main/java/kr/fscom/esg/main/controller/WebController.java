package kr.fscom.esg.main.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
public class WebController {
  @GetMapping("/sponsor")
  public ModelAndView sponsorPage() {
    return new ModelAndView("/sponsor/index");
  }
}
