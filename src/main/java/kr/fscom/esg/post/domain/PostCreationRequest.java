package kr.fscom.esg.post.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.lang.Nullable;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class PostCreationRequest {
  private String title;
  private String content;
  private PostCategory category;
  @Nullable
  private MultipartFile representFile;

  public void setTitle(String title) {
    this.title = title;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public void setRepresentFile(MultipartFile representFile) {
    this.representFile = representFile;
  }

  public void setCategory(String category) {
    this.category = PostCategory.from(category);
  }
}
