package kr.fscom.esg.authentication.service;

import java.util.Optional;
import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.authentication.domain.dto.EnterpriseDetails;
import kr.fscom.esg.authentication.domain.dto.JoinRequest;
import kr.fscom.esg.authentication.domain.dto.UserCreate;
import kr.fscom.esg.authentication.repository.AuthRepository;
import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.repository.UserMapper;
import kr.fscom.esg.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinService {

  private final UserMapper userMapper;
  private final AuthRepository authRepository;
  private final PasswordEncoder passwordEncoder;

  public void join(JoinRequest req) {
    checkDuplicateUser(req.getEmail());
    UserRole role = req.getRole();
    String encodedPassword = passwordEncoder.encode(req.getRawPassword());
    boolean active = true;
    Long enterpriseDetailsId = null;

    if (role.equals(UserRole.PROFESSIONAL)) {
      active = false;
    }

    if (role.equals(UserRole.ENTERPRISE)) {
      enterpriseDetailsId = updateEnterpriseDetails(req.getEnterpriseDetails());
    }

    UserCreate userCreate = UserCreate.create(req, encodedPassword, active, enterpriseDetailsId);
    userMapper.createUser(userCreate);
  }

  private Long updateEnterpriseDetails(EnterpriseDetails details) {
    if (details == null) {
      throw ApplicationException.BAD_REQUEST.create();
    }

    EnterpriseDetails existsEnterpriseDetails =
        authRepository.getEnterpriseDetails(details.getLicenseNumber());

    if (existsEnterpriseDetails != null) {
      return existsEnterpriseDetails.getId();
    }

    authRepository.createEnterpriseDetails(details.getCreateDto());
    return authRepository.getEnterpriseDetails(details.getLicenseNumber()).getId();
  }

  public void checkDuplicateUser(String email) {
    Optional<User> user = userMapper.getByEmail(email);
    if (user.isPresent()) {
      throw ApplicationException.EXISTS_USER.create();
    }
  }

}
