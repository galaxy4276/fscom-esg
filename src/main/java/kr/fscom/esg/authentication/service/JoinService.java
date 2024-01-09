package kr.fscom.esg.authentication.service;

import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.authentication.domain.dto.JoinRequest;
import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinService {

  private final UserRepository userRepository;

  public void join(JoinRequest req) {
    checkDuplicateUser(req.getEmail());
    UserRole role = req.getRole();
    if (role.equals(UserRole.ENTERPRISE)) {

    }

  }

  public void checkDuplicateUser(String email) {
    Object user = userRepository.getByEmail(email);
  }

}
