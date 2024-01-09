package kr.fscom.esg.user.repository;

import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@Slf4j
public class UserRepository {

  private final UserMapper mapper;

  public Object getByEmail(String email) {
    Map<String, Object> user = mapper.getByEmail(email);
    log.info(user.toString());
    return null;
  }

}
