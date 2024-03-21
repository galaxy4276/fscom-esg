package kr.fscom.esg.main.controller;

import kr.fscom.esg.post.domain.Post;
import kr.fscom.esg.post.service.PostCrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostModelController {

  private final PostCrudService postCrudService;

  @GetMapping
  public ModelAndView postWritePage() {
    return new ModelAndView("post/index");
  }

  @GetMapping("/{id}")
  public ModelAndView postDetailsPage() {
    return new ModelAndView("post/details");
  }

  @GetMapping("/{id}/update")
  public ModelAndView postUpdatePage() {
    return new ModelAndView("post/update");
  }

//  @GetMapping("/{id}")
//  public ModelAndView postDetailsPage(@PathVariable("id") Long id) {
//    Post post = postCrudService.getPost(id);
//    ModelAndView view = new ModelAndView("post/details");
//    view.addAllObjects(post.toMap());
//    return view;
//  }
}
