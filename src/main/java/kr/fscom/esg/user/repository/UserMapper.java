package kr.fscom.esg.user.repository;

import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

  public Map<String, Object> getByEmail(String email);

}
