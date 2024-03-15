package kr.fscom.esg.post.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import lombok.Data;

@Data
public class PostSummary {
  private Long id;
  private String title;
  private PostCategory category;
  @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
  private Date createdAt;
  @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
  private Date deletedAt;
  private Long userId;
}
