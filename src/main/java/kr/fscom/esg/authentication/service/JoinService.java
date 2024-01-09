package kr.fscom.esg.authentication.service;

import java.util.Date;
import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.authentication.domain.dto.JoinRequest;
import kr.fscom.esg.authentication.domain.dto.UserCreate;
import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public void join(JoinRequest req) {
    checkDuplicateUser(req.getEmail());
    UserRole role = req.getRole();
    String encodedPassword = passwordEncoder.encode(req.getRawPassword());
    boolean active = true;

    if (role.equals(UserRole.ENTERPRISE)) {
      active = false;
      if (req.getEnterpriseDetails() == null) {
        throw ApplicationException.BAD_REQUEST.create();
      }
    }

    UserCreate userCreate = UserCreate.builder()
        .email(req.getEmail())
        .password(encodedPassword)
        .tel(req.getTel())
        .name(req.getName())
        .role(req.getRole())
        .address(req.getAddress())
        .active(active)
        .createdAt(new Date())
        .build();

    userRepository.createUser(userCreate);

  }

  public void checkDuplicateUser(String email) {
    User user = userRepository.getByEmail(email);
    if (user != null) {
      throw ApplicationException.EXISTS_USER.create();
    }
  }

}
