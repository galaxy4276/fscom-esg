package kr.fscom.esg.post.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PostCreationRequest {
  private String title;
  private String content;
  private PostCategory category;
}
