package kr.fscom.esg.authentication.repository;

import java.util.Map;
import kr.fscom.esg.authentication.domain.dto.EnterpriseCreate;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AuthMapper {

  public Map<String, Object> getEnterpriseDetails(String licenseNumber);

  public void createEnterpriseDetails(EnterpriseCreate enterpriseCreate);

}
