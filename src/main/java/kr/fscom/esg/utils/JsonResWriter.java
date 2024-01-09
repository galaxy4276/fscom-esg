package kr.fscom.esg.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.Charset;
import javax.servlet.ServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;

@Slf4j
public class JsonResWriter {
  private final ObjectMapper objectMapper = new ObjectMapper();
  private final ServletResponse response;

  public JsonResWriter(ServletResponse response) {
    this.response = response;
  }

  public void setJson(Object o) {
    try {
      init();
      String ret = objectMapper.writeValueAsString(o);
      response.getWriter().write(ret);
    } catch (Exception ex) {
      log.error(ex.toString());
      ex.printStackTrace();
    }
  }

  private void init() {
    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
    response.setCharacterEncoding("utf8");
  }

}
