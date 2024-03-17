package kr.fscom.esg.file.controller;

import io.swagger.v3.oas.annotations.Operation;
import java.io.File;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/esg-file")
public class FileServeController {

  @Value("${esg.upload-path}")
  private String uploadPath;

  @GetMapping("/:filename")
  public ResponseEntity<File> getFileApi(@PathVariable(name = "filename") String filename) {
    return null;
  }

}
