package kr.fscom.esg.post.domain;

import java.util.Date;
import lombok.Data;

@Data
public class PostSummary {
  private Long id;
  private String title;
  private PostCategory category;
  private Date createdAt;
  private Date deletedAt;
  private Long userId;
}
