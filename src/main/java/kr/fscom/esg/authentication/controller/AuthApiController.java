package kr.fscom.esg.authentication.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.fscom.esg.authentication.domain.dto.JoinRequest;
import kr.fscom.esg.authentication.service.JoinService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "인증 REST API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@Slf4j
public final class AuthApiController {

  private final JoinService service;

  @Operation(summary = "회원가입 API")
  @PostMapping
  public ResponseEntity<Void> createUser(@RequestBody JoinRequest req) {
    log.info("[POST] /api/auth controller");
    service.join(req);
    return new ResponseEntity<>(HttpStatus.OK);
  }

}
