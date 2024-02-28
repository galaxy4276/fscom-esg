package kr.fscom.esg.post.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class PostCreation {
  private final String title;
  private final String content;
  private final PostCategory category;
}
