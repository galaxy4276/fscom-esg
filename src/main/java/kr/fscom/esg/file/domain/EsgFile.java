package kr.fscom.esg.file.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
@Getter
public class EsgFile {
  private final Long id;
  private final String name;
  private final String ext;
  private final long size;
  private final String location;
}
