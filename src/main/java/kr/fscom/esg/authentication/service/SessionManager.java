package kr.fscom.esg.authentication.service;

import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.repository.UserMapper;
import kr.fscom.esg.user.service.UserGetterService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SessionManager {

  private final UserMapper userMapper;
  private final UserGetterService userGetterService;

  public User getSessionUser() {
    String email = getEmail();
    return userGetterService.getUser(email);
  }

  private String getEmail() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    CustomUserDetails principal = (CustomUserDetails) authentication.getPrincipal();
    String email = principal.getUsername();
    if (email == null) {
      throw ApplicationException.UNAUTHORIZED.create();
    }
    return email;
  }

}
