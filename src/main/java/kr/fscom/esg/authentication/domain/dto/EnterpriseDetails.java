package kr.fscom.esg.authentication.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EnterpriseDetails {
  private String licenseNumber;
  private String address;
  private String represent;
  private String tel;
  private String name;
}
