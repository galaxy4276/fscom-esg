package kr.fscom.esg.common;

import kr.fscom.esg.authentication.service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final CustomAccessDeniedHandler accessDeniedHandler;
  private final CustomUserDetailsService userDetailsService;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.formLogin().disable();
    http.authorizeRequests()
        .anyRequest().permitAll();
    http.exceptionHandling()
        .accessDeniedHandler(accessDeniedHandler);
    http.csrf().disable();
    http.userDetailsService(userDetailsService);
    return http.build();
  }

  @Bean
  public WebSecurityCustomizer webSecurityCustomizer() {
    // 정적 자원에 대해서 Security를 적용하지 않음으로 설정
    return (web) -> web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

}
