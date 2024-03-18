package kr.fscom.esg.file.controller;

import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import kr.fscom.esg.common.ApplicationException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileUrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/esg-file")
@RequiredArgsConstructor
public class FileServeController {

  @Value("${esg.upload-path}")
  private String uploadPath;

  @GetMapping("/{filename}")
  public ResponseEntity<FileUrlResource> getFileApi(@PathVariable String filename) {
    Path path = Paths.get(uploadPath, filename);
    URL url = uriToUrl(path);
    FileUrlResource resource = new FileUrlResource(url);

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
    headers.setContentDispositionFormData("attachments", filename);

    return new ResponseEntity(resource, headers, HttpStatus.OK);
  }

  private URL uriToUrl(Path path) {
    try {
      return path.toUri().toURL();
    } catch (MalformedURLException ex) {
      ex.printStackTrace();
      throw ApplicationException.SERVER_ERROR.create();
    }
  }

}
