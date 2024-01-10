package kr.fscom.esg.authentication.domain.dto;

import java.util.Date;
import kr.fscom.esg.authentication.domain.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class UserCreate {
  private long id;
  private String email;
  private String password;
  private String name;
  private String tel;
  private UserRole role;
  private String address;
  private boolean active;
  private Date createdAt;
  private Long enterpriseId;

  public static UserCreate create(JoinRequest req, String encodedPassword, boolean active, Long enterpriseDetailsId) {
    return UserCreate.builder()
        .email(req.getEmail())
        .password(encodedPassword)
        .tel(req.getTel())
        .name(req.getName())
        .role(req.getRole())
        .address(req.getAddress())
        .active(active)
        .createdAt(new Date())
        .enterpriseId(enterpriseDetailsId)
        .build();
  }

}
