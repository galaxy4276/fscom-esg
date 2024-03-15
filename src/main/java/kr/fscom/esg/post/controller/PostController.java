package kr.fscom.esg.post.controller;

import io.swagger.v3.oas.annotations.Operation;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.service.PostCrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

  private final PostCrudService postCrudService;

  @Operation(summary = "게시글 생성")
  @PostMapping
  public ResponseEntity<Void> createPost(
      @RequestBody PostCreationRequest createPostRequest
  ) {
    postCrudService.create(createPostRequest);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @Operation(summary = "게시글 조회")
  @GetMapping
  public ResponseEntity<PageImpl<PostSummary>> getPosts(
      @RequestParam(name = "category")PostCategory category,
      Pageable pageable
  ) {
    PageImpl<PostSummary> posts = postCrudService.getList(pageable, category);
    return ResponseEntity.ok(posts);
  }

}
