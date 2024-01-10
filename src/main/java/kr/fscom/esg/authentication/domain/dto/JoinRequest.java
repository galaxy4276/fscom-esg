package kr.fscom.esg.authentication.domain.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import kr.fscom.esg.authentication.domain.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JoinRequest {
  @Schema(description = "사용자 권한")
  @NotBlank
  private UserRole role;
  @Schema(description = "이메일", example = "email@naver.com")
  private String email;
  private String rawPassword;
  private String name;
  @Schema(description = "휴대폰 번호")
  @Pattern(regexp = "^[0-9]{11}", message = "휴대폰 번호는 010XXXXXXXX 형식이어야 합니다.")
  private String tel;
  private String address;
  private EnterpriseDetails enterpriseDetails;
}
