package kr.fscom.esg.authentication.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class EnterpriseCreate {
  private Long id;
  private String licenseNumber;
  private String address;
  private String addressDetails;
  private String zipCode;
  private String name;
  private String tel;
  private String represent;
}
