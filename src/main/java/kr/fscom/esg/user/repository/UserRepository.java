package kr.fscom.esg.user.repository;

import java.util.Map;
import java.util.Optional;
import java.util.OptionalInt;
import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.authentication.domain.dto.UserCreate;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.utils.MapperSerializer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@Slf4j
public class UserRepository {

  private final UserMapper mapper;
  private final MapperSerializer mapperSerializer;

  public void createUser(UserCreate userCreate) {
    mapper.createUser(userCreate);
  }

  public Optional<User> getByEmail(String email) {
    return mapper.getByEmail(email);
  }

  public User mapUser(Map<String, Object> resultMap) {
    boolean active = mapperSerializer.bool(resultMap.get("active"));
    UserRole role = UserRole.fromString((String) resultMap.get("role"));
//    Date createdAt = new Date((String) resultMap.get("createdAt"));

    User user = User.builder()
        .id((Integer) resultMap.get("id"))
        .email((String) resultMap.get("email"))
        .password((String) resultMap.get("password"))
        .tel((String) resultMap.get("tel"))
        .address((String) resultMap.get("address"))
        .active(active)
        .role(role)
        .createdAt(null)
        .build();

    return user;
  }

}
