package kr.fscom.esg.user.domain;

import java.util.Date;
import kr.fscom.esg.authentication.domain.UserRole;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@Builder
public class User {
  private final long id;
  private final String email;
  private final String name;
  private final String tel;
  private final UserRole role;
  private final String address;
  private final boolean active;
  private final Date createdAt;
}
