package kr.fscom.esg.authentication.service;

import java.util.ArrayList;
import java.util.Collection;
import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
    return user.isActive();
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return user.isActive();
  }

  @Override
  public boolean isEnabled() {
    return user.isActive();
  }

}
