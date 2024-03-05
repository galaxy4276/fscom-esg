package kr.fscom.esg.user.repository;

import java.util.Date;
import java.util.Map;
import java.util.Optional;
import kr.fscom.esg.authentication.domain.UserRole;
import kr.fscom.esg.authentication.domain.dto.UserCreate;
import kr.fscom.esg.user.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

  public Optional<User> getByEmail(String email);

  public void createUser(UserCreate userCreate);

}
