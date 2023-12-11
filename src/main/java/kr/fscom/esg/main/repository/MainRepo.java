package kr.fscom.esg.main.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Mapper
@Repository
public interface MainRepo {
    HashMap<String, Object> selectUserList(HashMap<String, Object> param) throws Exception;
}