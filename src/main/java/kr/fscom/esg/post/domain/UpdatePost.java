package kr.fscom.esg.post.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UpdatePost {
  private Long id;
  private String title;
  private String content;
  private PostCategory category;
  private String representFileUrl;

  public static UpdatePost from(Long id, PostCreationRequest req, String location) {
    return new UpdatePost(
        id,
        req.getTitle(),
        req.getContent(),
        req.getCategory(),
        location
    );
  }
}
