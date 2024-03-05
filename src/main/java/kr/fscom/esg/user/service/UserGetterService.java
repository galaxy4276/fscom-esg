package kr.fscom.esg.user.service;

import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.repository.UserMapper;
import kr.fscom.esg.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserGetterService {

  private final UserMapper userMapper;

  public User getSessionUser() {
    String email = (String) SecurityContextHolder.getContext()
        .getAuthentication()
        .getPrincipal();
    log.info("email: {}", email);
    return getUser(email);
  }

  public User getUser(String email) {
    return userMapper.getByEmail(email)
        .orElseThrow(ApplicationException.NOT_EXISTS_USER::create);
  }

}
