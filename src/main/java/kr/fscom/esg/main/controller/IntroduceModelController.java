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

  @GetMapping("/greet")
  public ModelAndView introducePage() {
    return new ModelAndView("/introduce/index");
  }

  @GetMapping("/executive")
  public ModelAndView executiveIntroPage() {
    return new ModelAndView("/introduce/intro-executive");
  }

  @GetMapping("/goals")
  public ModelAndView goalsIntroPage() {
    return new ModelAndView("/introduce/goals");
  }

  @GetMapping("/vision")
  public ModelAndView visionIntroPage() {
    return new ModelAndView("/introduce/vision");
  }

  @GetMapping("/core")
  public ModelAndView coreIntroPage() {
    return new ModelAndView("/introduce/core");
  }

  @GetMapping("/org")
  public ModelAndView orgIntroPage() {
    return new ModelAndView("/introduce/org");
  }

  @GetMapping("/ci")
  public ModelAndView ciIntroPage() {
    return new ModelAndView("/introduce/ci");
  }

  @GetMapping("/map")
  public ModelAndView mapIntroPage() {
    return new ModelAndView("/introduce/map");
  }

}
