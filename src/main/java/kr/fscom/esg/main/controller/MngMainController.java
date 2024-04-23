package kr.fscom.esg.main.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/mng")
public class MngMainController {

    @GetMapping
    public ModelAndView mngMainPage() {
        return new ModelAndView("mng/index");
    }

    @GetMapping("/userManagement")
    public ModelAndView userManagementPage() {
        return new ModelAndView("mng/userManagement");
    }


}
