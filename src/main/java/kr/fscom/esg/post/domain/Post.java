package kr.fscom.esg.post.domain;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.Data;

@Data
public class Post {
  private Long id;
  private String text;
  private PostCategory category;
  private Date createdAt;
  private Date deletedAt;
  private Long userId;

  public Map<String, Object> toMap() {
    HashMap<String, Object> map = new HashMap<>();
    map.put("id", id);
    map.put("text", text);
    map.put("category", category);
    map.put("createdAt", createdAt);
    map.put("userId", userId);
    return map;
  }
}
