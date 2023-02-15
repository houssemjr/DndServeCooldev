package com.houssem.testpidev;

import com.houssem.testpidev.dto.UserRequest;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.shaded.com.fasterxml.jackson.databind.ObjectMapper;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@Testcontainers
@AutoConfigureMockMvc
@AllArgsConstructor

class TestpidevApplicationTests {
@Container
	static MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:4.4.2");
@Autowired
private  ObjectMapper objectMapper;

@Autowired
private MockMvc mockMvc;




	@DynamicPropertySource
    static void setPropreties(DynamicPropertyRegistry dynamicPropertyRegistry ){
		dynamicPropertyRegistry.add("spring.data.mongodb.uri",mongoDBContainer::getReplicaSetUrl);
	}
	@Test
	void shouldSignup() throws Exception {
	UserRequest userRequest =getUserRequest();
	String requeststring =objectMapper.writeValueAsString(userRequest);
	mockMvc.perform(MockMvcRequestBuilders.post("/user/add")
			.contentType(MediaType.APPLICATION_JSON)
			.content(requeststring))
			.andExpect(status().isCreated());



	}

	private UserRequest getUserRequest() {
	return UserRequest.builder()
			.nom("jrad")
			.prenom("houssem")
			.balance(Float.valueOf(12))
			.login("houssem")
			.password("1234").build();
	}

}
