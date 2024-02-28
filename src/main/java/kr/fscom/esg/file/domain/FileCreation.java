package kr.fscom.esg.file.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;

@AllArgsConstructor
@Builder
public class FileCreation {
  private String name;
  private String ext;
  private long size;
  private String location;
}
