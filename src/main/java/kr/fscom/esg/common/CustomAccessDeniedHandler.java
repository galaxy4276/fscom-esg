package kr.fscom.esg.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomAccessDeniedHandler implements AccessDeniedHandler {

  private final ObjectMapper objectMapper;

  @Override
  public void handle(HttpServletRequest request, HttpServletResponse response,
                     AccessDeniedException accessDeniedException)
      throws IOException, ServletException {
    String uri = request.getRequestURI();
    log.info("[AccessDenied] uri: {}", uri);

    BasicException ex = ApplicationException.FORBIDDEN.create();
    String ret = objectMapper.writeValueAsString(ex.getErrorResponse());
    response.getWriter().write(ret);
  }

}
