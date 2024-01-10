package kr.fscom.esg.authentication.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EnterpriseDetails {
  private Long id;
  private String licenseNumber;
  private String address;
  private String represent;
  private String tel;
  private String name;

  public EnterpriseCreate getCreateDto() {
    return EnterpriseCreate.builder()
        .id(id)
        .licenseNumber(licenseNumber)
        .address(address)
        .represent(represent)
        .tel(tel)
        .name(name)
        .build();
  }

}
