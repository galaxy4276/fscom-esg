package kr.fscom.esg.post.service;

import java.awt.print.Pageable;
import java.util.List;
import kr.fscom.esg.authentication.service.CustomUserDetails;
import kr.fscom.esg.authentication.service.SessionManager;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreation;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.repository.PostMapper;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.repository.UserMapper;
import kr.fscom.esg.user.service.UserGetterService;
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
  private final UserGetterService userGetterService;
  private final SessionManager sessionManager;

  public void create(PostCreationRequest request) {
    User user = sessionManager.getSessionUser();
    PostCreation creation = PostCreation.from(request, user.getId());
    postMapper.createPost(creation);
  }

  public List<PostSummary> getList(Pageable pageable, PostCategory category) {
    return null;
  }

}
