package kr.fscom.esg.authentication.repository;

import java.util.Map;
import kr.fscom.esg.authentication.domain.dto.EnterpriseCreate;
import kr.fscom.esg.authentication.domain.dto.EnterpriseDetails;
import kr.fscom.esg.utils.MapperSerializer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@Slf4j
public class AuthRepository {

  private final AuthMapper mapper;
  private final MapperSerializer mapperSerializer;

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
    log.error("data: {}", resultMap.toString());
    return EnterpriseDetails.builder()
        .id(mapperSerializer.primaryKey(resultMap.get("id")))
        .licenseNumber((String) resultMap.get("license_number"))
        .address((String) resultMap.get("address"))
        .represent((String) resultMap.get("represent"))
        .tel((String) resultMap.get("tel"))
        .name((String) resultMap.get("name"))
        .build();
  }

}
