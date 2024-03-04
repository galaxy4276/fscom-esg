package kr.fscom.esg.authentication.service;

import kr.fscom.esg.authentication.domain.dto.LoginRequest;
import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

  private final AuthenticationManager authenticationManager;
  private final UserRepository userRepository;

  public void login(LoginRequest loginRequest) {
    userRepository.getByEmail(loginRequest.getEmail())
        .orElseThrow(ApplicationException.NOT_EXISTS_USER::create);

    UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
        loginRequest.getEmail(), loginRequest.getPassword()
    );
    Authentication auth = authenticationManager.authenticate(token);
    SecurityContextHolder
        .getContext()
        .setAuthentication(auth);
  }

}
