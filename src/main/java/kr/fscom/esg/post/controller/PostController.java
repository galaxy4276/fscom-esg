package kr.fscom.esg.post.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.fscom.esg.post.domain.Post;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.service.PostCrudService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "게시글 REST API")
@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
@Slf4j
public class PostController {

  private final PostCrudService postCrudService;

  @Operation(summary = "게시글 생성")
  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Void> createPostApi(@ModelAttribute PostCreationRequest createPostRequest) {
    log.warn("request value: {}", createPostRequest.toString());
    postCrudService.create(createPostRequest);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @Operation(summary = "게시글 리스트 조회")
  @GetMapping
  public ResponseEntity<PageImpl<PostSummary>> getPostsApi(
      @RequestParam(name = "category")PostCategory category,
      Pageable pageable
  ) {
    PageImpl<PostSummary> posts = postCrudService.getList(pageable, category);
    return ResponseEntity.ok(posts);
  }

  @Operation(summary = "게시글 상세 조회")
  @GetMapping("/{id}")
  public ResponseEntity<Post> getPostApi(@PathVariable Long id) {
    Post post = postCrudService.getPost(id);
    return ResponseEntity.ok(post);
  }

  @Operation(summary = "게시글 삭제")
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> softDeleteApi(@PathVariable Long id) {
    postCrudService.softDelete(id);
    return ResponseEntity.status(HttpStatus.OK).build();
  }

  @Operation(summary = "게시글 수정")
  @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Void> updateApi(
      @PathVariable Long id,
      @ModelAttribute PostCreationRequest req
  ) {
    log.info(req.toString());
    postCrudService.update(id, req);
    return ResponseEntity.status(HttpStatus.OK).build();
  }

}
