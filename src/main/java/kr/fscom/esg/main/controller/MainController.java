package kr.fscom.esg.main.controller;

import kr.fscom.esg.main.repository.MainRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
@Slf4j
public class MainController {

    private final MainRepo mainRepo;

    @GetMapping
    public ModelAndView indexPage() {
        ModelAndView mav = new ModelAndView("/index");
        return mav;
    }

    @RequestMapping(value = "/main")
    public ModelAndView mainPage() {
        ModelAndView mav = new ModelAndView("/index");
        return mav;
    }

    @RequestMapping(value = "/userListAjax")
    @ResponseBody
    public HashMap<String, Object> userListAjax(HttpServletRequest req) throws Exception {
        HashMap<String, Object> prm = new HashMap<>();
        prm.put("usr_id", req.getParameter("usr_id"));
        HashMap<String, Object> rtn = new HashMap<>();
        rtn.put("info", mainRepo.selectUserList(prm));
        return rtn;
    }

}
