package kr.fscom.esg.post.service;

import java.awt.print.Pageable;
import java.util.List;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreation;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.repository.PostMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostCrudService {

  private final PostMapper postMapper;

  public void create(PostCreationRequest request) {
    PostCreation creation = PostCreation.from(request);
    postMapper.createPost(creation);
  }

  public List<PostSummary> getList(Pageable pageable, PostCategory category) {
    return null;
  }

}
