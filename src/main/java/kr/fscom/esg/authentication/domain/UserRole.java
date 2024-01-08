package kr.fscom.esg.authentication.domain;

import lombok.Getter;

@Getter
public enum UserRole {
  ADMIN("관리자"),
  PROFESSIONAL("전문가"),
  ENTERPRISE("기업 사용자"),
  GENERAL("일반 사용자");

  private final String name;

  UserRole(String name) {
    this.name = name;
  }

}
