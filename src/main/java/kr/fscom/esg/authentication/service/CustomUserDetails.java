package kr.fscom.esg.authentication.service;

import java.util.ArrayList;
import java.util.Collection;
import kr.fscom.esg.user.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Slf4j
@RequiredArgsConstructor
public class CustomUserDetails implements UserDetails {
  private final User user;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    ArrayList<GrantedAuthority> list = new ArrayList<>();
    CustomGrantedAuthority authority = new CustomGrantedAuthority(user.getRole());
    list.add(authority);
    return list;
  }

  @Override
  public String getPassword() {
    return user.getPassword();
  }

  @Override
  public String getUsername() {
    return user.getEmail();
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    // TODO: 계정 잠금 구현여부 확인 이 후 재개
    boolean active = user.isActive();
    log.info("isAccountNonLocked: {}", active);

    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

}
