package kr.fscom.esg.authentication.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.validation.Valid;
import kr.fscom.esg.authentication.domain.dto.Enterprise;
import kr.fscom.esg.authentication.domain.dto.JoinRequest;
import kr.fscom.esg.authentication.domain.dto.LoginRequest;
import kr.fscom.esg.authentication.service.EnterpriseService;
import kr.fscom.esg.authentication.service.JoinService;
import kr.fscom.esg.authentication.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "인증 REST API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@Slf4j
public final class AuthApiController {

  private final JoinService joinService;
  private final EnterpriseService enterpriseService;
  private final LoginService loginService;

  @Operation(summary = "회원가입 API")
  @PostMapping
  public ResponseEntity<Void> createUserApi(@RequestBody @Valid JoinRequest req) {
    joinService.join(req);
    return new ResponseEntity<>(HttpStatus.CREATED);
  }

  @Operation(summary = "기업 정보 찾기")
  @GetMapping("/enterprise")
  public ResponseEntity<Enterprise> findEnterpriseApi(@RequestParam("licenseNumber") String licenseNumber) {
    Enterprise enterprise = enterpriseService.findEnterpriseDetails(licenseNumber);
    return ResponseEntity.ok(enterprise);
  }

  @Operation(summary = "로그인 API")
  @PostMapping("/login")
  public ResponseEntity<Void> loginApi(@RequestBody LoginRequest req) {
    loginService.login(req);
    return ResponseEntity.ok(null);
  }

}
