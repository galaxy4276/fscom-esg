package kr.fscom.esg.post.service;

import kr.fscom.esg.post.domain.PostCategory;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class PostCategoryConverter implements Converter<String, PostCategory> {
  @Override
  public PostCategory convert(String source) {
    return PostCategory.from(source);
  }
}
