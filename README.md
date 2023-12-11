# fscom-korea-esg


## TEST DB 정보

###DB CREATE QUERY
```sql
    CREATE DATABASE ESG_HOMEPAGE /*!40100 COLLATE 'utf8mb4_general_ci' */
```

###TABLE CREATE QUERY
```sql
    CREATE TABLE c_user (
    USR_ID VARCHAR(50) NULL DEFAULT NULL COMMENT '사용자 아이디' COLLATE 'utf8mb4_general_ci',
    USR_PW VARCHAR(50) NULL DEFAULT NULL COMMENT '사용자 비밀번호' COLLATE 'utf8mb4_general_ci',
    USR_NM VARCHAR(50) NULL DEFAULT NULL COMMENT '사용자 이름' COLLATE 'utf8mb4_general_ci',
    REGDATE DATETIME NULL DEFAULT NULL COMMENT '등록일'
    )
    COMMENT='사용자 정보'
    COLLATE='utf8mb4_general_ci'
    ENGINE=InnoDB
```

###DATA INSERT QUERY
```sql
    INSERT INTO c_user (USR_ID, USR_PW, USR_NM, REGDATE) VALUES ('admin', '1234', 'LOCAL관리자', '2023-12-11 17:20:28');
    INSERT INTO c_user (USR_ID, USR_PW, USR_NM, REGDATE) VALUES ('asd', 'asd', '아무개', '2023-12-11 17:33:25');
```