package kr.fscom.esg.user.repository;

import java.util.Date;
import java.util.Map;
import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.authentication.domain.dto.UserCreate;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

  public Map<String, Object> getByEmail(String email);

  public void createUser(UserCreate userCreate);

}
