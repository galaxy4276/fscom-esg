package kr.fscom.esg.authentication.service;

import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService  {
  private final UserRepository userRepository;

  /**
   * @param username 사용자 이메일
   */
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.getByEmail(username)
        .orElseThrow(ApplicationException.NOT_EXISTS_USER::create);
    return new CustomUserDetails(user);
  }

}
