package kr.fscom.esg.user.domain;

import java.util.Date;
import kr.fscom.esg.authentication.domain.UserRole;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@Builder
public final class User {
  private long id;
  private String email;
  private String name;
  private String tel;
  private UserRole role;
  private String address;
  private boolean active;
  private Date createdAt;
}
