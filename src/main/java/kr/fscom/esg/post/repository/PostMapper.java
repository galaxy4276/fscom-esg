package kr.fscom.esg.post.repository;

import java.util.List;
import java.util.Optional;
import kr.fscom.esg.post.domain.Post;
import kr.fscom.esg.post.domain.PostCategory;
import kr.fscom.esg.post.domain.PostCreation;
import kr.fscom.esg.post.domain.PostSummary;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PostMapper {

  void createPost(PostCreation postCreation);

  Optional<Post> getPost(@Param("id") Long id);

  List<PostSummary> getPosts(@Param("category") String category, @Param("page") int page);

  Long getTotalCount(String category);
}
