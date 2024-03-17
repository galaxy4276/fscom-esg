package kr.fscom.esg.post.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PostCreationRequest {
  private String title;
  private String content;
  private PostCategory category;
  private MultipartFile representFile;

  public void setCategory(String category) {
    this.category = PostCategory.from(category);
  }
}
