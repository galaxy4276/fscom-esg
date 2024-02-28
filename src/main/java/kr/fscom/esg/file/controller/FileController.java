package kr.fscom.esg.file.controller;

import kr.fscom.esg.file.domain.EsgFile;
import kr.fscom.esg.file.service.FileStorageHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {

  private final FileStorageHandler fileStorageHandler;

  @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
  public ResponseEntity<EsgFile> save(@RequestParam MultipartFile file) {
    EsgFile esgFile = fileStorageHandler.save(file);
    return ResponseEntity.status(HttpStatus.CREATED).body(esgFile);
  }

}
