package kr.fscom.esg.file.repository;

import kr.fscom.esg.file.domain.EsgFile;
import kr.fscom.esg.file.domain.FileCreation;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FileMapper {

  public EsgFile getById(Long id);

  public EsgFile getByName(String name);

  public void createFile(FileCreation creation);

}
