package kr.fscom.esg.authentication.controller;

import kr.fscom.esg.authentication.domain.dto.JoinRequest;
import kr.fscom.esg.authentication.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public final class ApiController {

  private final JoinService service;

  @PostMapping
  public ResponseEntity<Void> createUser(@RequestBody JoinRequest req) {
    service.join(req);
    return new ResponseEntity<>(HttpStatus.OK);
  }

}
