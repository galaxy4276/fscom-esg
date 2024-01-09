package kr.fscom.esg.authentication.domain;

import kr.fscom.esg.common.ApplicationException;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
public enum UserRole {
  ADMIN("관리자"),
  PROFESSIONAL("전문가"),
  ENTERPRISE("기업 사용자"),
  GENERAL("일반 사용자");

  private final String name;

  UserRole(String name) {
    this.name = name;
  }

  public static UserRole fromString(String s) {
    for (UserRole role : UserRole.values()) {
      if (role.name().equals(s)) {
        return role;
      }
    }
    log.warn("[UserRole] 외부 정보는 UserRole 객체가 아닙니다.");
    throw ApplicationException.BAD_REQUEST.create();
  }

}
