package kr.fscom.esg.post.domain;

import java.util.Date;
import lombok.Data;

@Data
public class Post {
  private Long id;
  private String text;
  private PostCategory category;
  private Date createdAt;
  private Date deletedAt;
  private Long userId;
}
