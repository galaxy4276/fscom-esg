package kr.fscom.esg.utils;

import org.springframework.stereotype.Component;

@Component
public class MapperSerializer {

  public boolean bool(Object b) {
    if (b == null) {
      return false;
    }
    return b.equals("true");
  }

}
