package kr.fscom.esg.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
@Builder
public class BasicErrorResponse {
  private final String errorCode;
  private final String message;
  @JsonIgnore
  private final HttpStatus httpStatus;
}
