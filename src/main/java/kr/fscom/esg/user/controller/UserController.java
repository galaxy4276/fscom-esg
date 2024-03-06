package kr.fscom.esg.user.controller;

import io.swagger.v3.oas.annotations.Operation;
import kr.fscom.esg.user.domain.User;
import kr.fscom.esg.user.service.UserGetterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

  private final UserGetterService userGetterService;

  @Operation(summary = "사용자 정보 조회 API")
  @GetMapping
  public ResponseEntity<User> getUserApi() {
    return ResponseEntity.ok(userGetterService.getSessionUserWithoutPassword());
  }

}
