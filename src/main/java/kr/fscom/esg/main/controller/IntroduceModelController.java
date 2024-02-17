package kr.fscom.esg.main.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/introduce")
public class IntroduceModelController {

  // 회장 인사말
  @GetMapping
  public ModelAndView introducePage() {
    return new ModelAndView("/introduce/index");
  }

  // 함께하는 사람들
  @GetMapping("/executors")
  public ModelAndView executiveIntroPage() {
    return new ModelAndView("/introduce/executors");
  }

  // 비전
  @GetMapping("/vision")
  public ModelAndView visionIntroPage() {
    return new ModelAndView("/introduce/vision");
  }

}
