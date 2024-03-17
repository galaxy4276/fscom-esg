package kr.fscom.esg.post.service;

import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.Objects;
import kr.fscom.esg.authentication.service.SessionManager;
import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.file.domain.EsgFile;
import kr.fscom.esg.file.service.FileStorageHandler;
import kr.fscom.esg.post.domain.Post;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreation;
import kr.fscom.esg.post.domain.PostCreationRequest;
import kr.fscom.esg.post.domain.PostSummary;
import kr.fscom.esg.post.repository.PostMapper;
import kr.fscom.esg.user.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "게시글 API")
@Service
@RequiredArgsConstructor
@Slf4j
public class PostCrudService {

  private final PostMapper postMapper;
  private final SessionManager sessionManager;
  private final FileStorageHandler fileStorageHandler;

  public void create(PostCreationRequest request) {
    User user = sessionManager.getSessionUser();
    EsgFile file = fileStorageHandler.save(request.getRepresentFile());
    String location = Objects.requireNonNull(file.getLocation());
    PostCreation creation = PostCreation.from(request, location, user.getId());
    postMapper.createPost(creation);
  }

  public PageImpl<PostSummary> getList(Pageable pageable, PostCategory category) {
    String c = category.name().toLowerCase();
    Long totalCount = postMapper.getTotalCount(c).getCount();
    List<PostSummary> posts = postMapper.getPosts(c, pageable.getPageNumber());
    return new PageImpl<>(posts, pageable, totalCount);
  }

  public Post getPost(Long id) {
    return postMapper.getPost(id)
        .orElseThrow(ApplicationException.NOT_FOUND::create);
  }

}
