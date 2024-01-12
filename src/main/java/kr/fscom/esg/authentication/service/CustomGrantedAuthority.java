package kr.fscom.esg.authentication.service;

import kr.fscom.esg.authentication.domain.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@RequiredArgsConstructor
public class CustomGrantedAuthority implements GrantedAuthority {
  private final UserRole userRole;

  @Override
  public String getAuthority() {
    return userRole.name();
  }

}
