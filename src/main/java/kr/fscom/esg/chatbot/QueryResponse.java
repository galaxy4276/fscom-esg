package kr.fscom.esg.chatbot;

import lombok.Data;

@Data
class ProductDescription {
  private String result;
}

@Data
public class QueryResponse {
  private ProductDescription product_description;
}
