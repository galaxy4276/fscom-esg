package kr.fscom.esg;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@PostConstruct
	public void createResourceFile() {
		try {
			Files.createDirectory(Paths.get("src/main/resources/uploads"));
		} catch (IOException ex) {
			System.out.println("업로드 파일 생성 중 오류가 발생하였습니다.");
			ex.printStackTrace();
		}
	}

}
