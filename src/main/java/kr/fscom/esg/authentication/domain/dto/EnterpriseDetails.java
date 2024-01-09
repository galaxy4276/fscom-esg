package kr.fscom.esg.authentication.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class EnterpriseDetails {
  private final String licenseNumber;
  private final String address;
  private final String represent;
  private final String tel;
  private final String name;
}
