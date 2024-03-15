package kr.fscom.esg.post.service;

import io.swagger.v3.oas.annotations.tags.Tag;
import java.awt.print.Pageable;
import java.util.List;
import kr.fscom.esg.authentication.service.SessionManager;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreation;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.repository.PostMapper;
import kr.fscom.esg.user.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Tag(name = "게시글 API")
@Service
@RequiredArgsConstructor
@Slf4j
public class PostCrudService {

  private final PostMapper postMapper;
  private final SessionManager sessionManager;

  public void create(PostCreationRequest request) {
    User user = sessionManager.getSessionUser();
    PostCreation creation = PostCreation.from(request, user.getId());
    postMapper.createPost(creation);
  }

  public List<PostSummary> getList(Pageable pageable, PostCategory category) {
    String c = category.name().toLowerCase();
    return postMapper.getPosts(c, pageable.getNumberOfPages());
  }

}
