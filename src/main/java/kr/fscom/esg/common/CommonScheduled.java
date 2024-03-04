package kr.fscom.esg.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class CommonScheduled {

    private static final Logger LOG = LoggerFactory.getLogger(CommonScheduled.class);

    @Autowired
    public CommonScheduled() {

    }

//    @Scheduled(cron = "0 0 * * * *") // 1시간 마다 실행
//    public void hour01() throws Exception {
//        LOG.error("hour01");
//    }
//
//    @Scheduled(cron = "0 * * * * *") // 1분 마다 실행
//    public void minute01() throws Exception {
//        LOG.error("minute01");
//    }
}
