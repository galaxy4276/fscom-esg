package kr.fscom.esg.post.domain;

import java.util.Date;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Data
public class PostCreation {
  private final String title;
  private final String content;
  private final PostCategory category;
  private final Date createdAt;
  private final String representFileUrl;
  private final Long userId;

  public static PostCreation from(PostCreationRequest req, String url, Long userId) {
    return new PostCreation(
        req.getTitle(),
        req.getContent(),
        req.getCategory(),
        new Date(),
        url,
        userId
    );
  }

}
