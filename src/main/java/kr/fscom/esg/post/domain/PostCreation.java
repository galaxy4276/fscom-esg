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

  public static PostCreation from(PostCreationRequest req) {
    return new PostCreation(
        req.getTitle(),
        req.getContent(),
        req.getCategory(),
        new Date()
    );
  }

}
