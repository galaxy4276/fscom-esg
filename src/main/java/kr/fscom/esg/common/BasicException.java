package kr.fscom.esg.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class BasicException extends RuntimeException {
  private final BasicErrorResponse errorResponse;
}
