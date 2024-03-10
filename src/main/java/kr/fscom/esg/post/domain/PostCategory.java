package kr.fscom.esg.post.domain;

import lombok.Getter;

@Getter
public enum PostCategory {
  NEWS;

  public static PostCategory from(String s) {
    return PostCategory.valueOf(s.toUpperCase());
  }

}
