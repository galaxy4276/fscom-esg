package kr.fscom.esg.post.domain;

import lombok.Data;

@Data
public class PostCreationRequest {
  private final String title;
  private final String content;
  private final PostCategory category;
}
