package kr.fscom.esg.user.domain;

import java.util.Date;
import kr.fscom.esg.authentication.domain.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class User {
  private long id;
  private String email;
  private String password;
  private String name;
  private String tel;
  private String address;
  private boolean active;
  private UserRole role;
  private Date createdAt;
  private Long enterpriseId;

  public void setNullPassword() {
    password = null;
  }

}
