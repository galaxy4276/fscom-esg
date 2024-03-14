package kr.fscom.esg.post.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

@Getter
public enum PostCategory {
  NEWS;

  @JsonCreator
  public static PostCategory from(String s) {
    return PostCategory.valueOf(s.toUpperCase());
  }

}
