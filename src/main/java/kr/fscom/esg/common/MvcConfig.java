package kr.fscom.esg.common;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.*;

@EnableWebMvc
@Configuration
@EnableScheduling
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
//        로그인
        registry.addViewController("/").setViewName("redirect:/main");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*").allowedMethods("*").allowedHeaders("*");
    }

    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("file:src/main/resources/templates/");
        registry.addResourceHandler("/fs/**").addResourceLocations("file:src/main/resources/fs/");

        registry
            .addResourceHandler("/esg-file/**")
            .addResourceLocations("classpath:/uploads");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(mainInterceptor())
            .addPathPatterns("/main/**");
    }

    // Bean 등록
    @Bean
    public TaskScheduler scheduler() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(4);
        return scheduler;
    }

    @Bean
    public HandlerInterceptor mainInterceptor() {
        return new MainInterceptor();
    }

}
