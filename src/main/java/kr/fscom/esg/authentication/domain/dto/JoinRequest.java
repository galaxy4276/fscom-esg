package kr.fscom.esg.authentication.domain.dto;

import kr.fscom.esg.authentication.domain.UserRole;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class JoinRequest {
  private final UserRole role;
  private final String email;
  private final String name;
  private final String tel;
  private final String address;
  private final EnterpriseDetails enterpriseDetails;
}
