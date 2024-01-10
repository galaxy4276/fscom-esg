package kr.fscom.esg.authentication.service;

import kr.fscom.esg.authentication.domain.dto.Enterprise;
import kr.fscom.esg.authentication.domain.dto.EnterpriseDetails;
import kr.fscom.esg.authentication.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EnterpriseService {

  private final AuthRepository authRepository;

  public Enterprise findEnterpriseDetails(String licenseNumber) {
    EnterpriseDetails enterpriseDetails = authRepository.getEnterpriseDetails(licenseNumber);
    if (enterpriseDetails == null) {
      return new Enterprise(null);
    }
    return new Enterprise(enterpriseDetails);
  }

}
