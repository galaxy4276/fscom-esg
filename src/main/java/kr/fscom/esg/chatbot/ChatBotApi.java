package kr.fscom.esg.chatbot;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/chatbot")
@RequiredArgsConstructor
public class ChatBotApi {

  @Operation(summary = "챗봇 질문 요청 API")
  @PostMapping
  public ResponseEntity<QueryResponse> queryApi(@RequestBody QueryRequest queryRequest) {
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    RestTemplate restTemplate = new RestTemplate();
    HttpEntity<QueryRequest> httpEntity = new HttpEntity<>(queryRequest, headers);
    return restTemplate.exchange("1.223.40.19:1729/ESG", HttpMethod.POST, httpEntity, QueryResponse.class);
  }

}
