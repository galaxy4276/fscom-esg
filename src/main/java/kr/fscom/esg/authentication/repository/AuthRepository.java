package kr.fscom.esg.authentication.repository;

import java.util.Map;
import kr.fscom.esg.authentication.domain.dto.EnterpriseCreate;
import kr.fscom.esg.authentication.domain.dto.EnterpriseDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AuthRepository {

  private final AuthMapper mapper;

  public EnterpriseDetails getEnterpriseDetails(String licenseNumber) {
    Map<String, Object> resultMap = mapper.getEnterpriseDetails(licenseNumber);
    if (resultMap == null) {
      return null;
    }
    return mapEnterpriseDetails(resultMap);
  }

  public void createEnterpriseDetails(EnterpriseCreate enterpriseCreate) {
    mapper.createEnterpriseDetails(enterpriseCreate);
  }

  private EnterpriseDetails mapEnterpriseDetails(Map<String, Object> resultMap) {
    return EnterpriseDetails.builder()
        .licenseNumber((String) resultMap.get("licenseNumber"))
        .address((String) resultMap.get("address"))
        .represent((String) resultMap.get("represent"))
        .tel((String) resultMap.get("tel"))
        .name((String) resultMap.get("name"))
        .build();
  }

}
