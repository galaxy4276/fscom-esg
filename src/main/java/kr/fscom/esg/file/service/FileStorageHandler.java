package kr.fscom.esg.file.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import kr.fscom.esg.common.ApplicationException;
import kr.fscom.esg.file.domain.EsgFile;
import kr.fscom.esg.file.domain.FileCreation;
import kr.fscom.esg.file.repository.FileMapper;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class FileStorageHandler {

  @Value("${esg.upload-path}")
  private String fileUploadPath;

  private final FileMapper repository;

  public EsgFile save(MultipartFile multipartFile) {
    long size = multipartFile.getSize();
    String filename = createUniqueName(multipartFile.getOriginalFilename());

    uploadToStorage(multipartFile, filename);

    String contentType = multipartFile.getContentType();
    FileCreation creation = FileCreation.builder()
        .name(filename)
        .size(size)
        .ext(contentType)
        .location("/esg-file/" + filename)
        .build();

    repository.createFile(creation);
    return repository.getByName(filename);
  }

  public void uploadToStorage(MultipartFile file, String filename) {
    try {
      File f = new File(fileUploadPath, filename);
      file.transferTo(f);
    } catch (IOException ex) {
      ex.printStackTrace();
      throw ApplicationException.SERVER_ERROR.create();
    }
  }

  private String createUniqueName(String name) {
    return RandomStringUtils.randomAlphabetic(5) + "_" + name;
  }

}
