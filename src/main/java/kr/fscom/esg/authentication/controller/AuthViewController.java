package kr.fscom.esg.authentication.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthViewController {

  @GetMapping("/login")
  public ModelAndView loginPage() {
    return new ModelAndView("/auth/login");
  }

  @GetMapping("/join")
  public ModelAndView joinPage() {
    return new ModelAndView("/auth/join");
  }

  @GetMapping("/join/agreement")
  public ModelAndView joinAgreementPage() {
    return new ModelAndView("/auth/agreement");
  }

  @GetMapping("/join/user")
  public ModelAndView joinUserPage() {
    return new ModelAndView("/auth/user");
  }

  @GetMapping("/join/done")
  public ModelAndView joinDonePage() {
    return new ModelAndView("/auth/done");
  }

}
