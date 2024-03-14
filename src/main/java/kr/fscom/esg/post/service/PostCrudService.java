package kr.fscom.esg.post.service;

import java.awt.print.Pageable;
import java.util.List;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreation;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.repository.PostMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostCrudService {

  private final PostMapper postMapper;

  public void create(PostCreationRequest request) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    Long userId = Long.getLong((String) authentication.getPrincipal());
    log.info("userId: {}", userId);
    PostCreation creation = PostCreation.from(request, userId);
    postMapper.createPost(creation);
  }

  public List<PostSummary> getList(Pageable pageable, PostCategory category) {
    return null;
  }

}
