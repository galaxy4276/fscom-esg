CREATE TABLE IF NOT EXISTS users (
     `id` integer PRIMARY KEY AUTO_INCREMENT,
     `email` varchar(255) NOT NULL COMMENT '이메일(아이디)',
    `password` varchar(255) NOT NULL COMMENT '패스워드',
    `name` varchar(255) NOT NULL COMMENT '이름(실명)',
    `tel` varchar(255) NOT NULL COMMENT '연락처',
    `address` varchar(255) NOT NULL COMMENT '주소',
    `active` boolean NOT NULL COMMENT '계정 활성화 여부(관리자)',
    `role` ENUM ('GENERAL', 'ENTERPRISE', 'ADMIN', 'PROFESSIONAL') NOT NULL COMMENT '사용자 권한',
    `created_at` timestamp NOT NULL COMMENT '계정 생성일',
    `enterprise_id` integer COMMENT '기업 정보 FK',
    `removed_at` timestamp COMMENT '계정 삭제일'
);

CREATE TABLE IF NOT EXISTS `files` (
     `id` integer PRIMARY KEY AUTO_INCREMENT,
     `name` varchar(255) COMMENT '파일 이름',
    `ext` varchar(255) COMMENT '파일 확장자',
    `size` varchar(255) COMMENT '파일 사이즈',
    `location` varchar(255) COMMENT '파일 접근 엔드포인트'
    );

CREATE TABLE IF NOT EXISTS `user_enterprise_details` (
   `id` integer PRIMARY KEY AUTO_INCREMENT,
   `license_number` varchar(255) NOT NULL COMMENT '사업자 번호',
    `represent` varchar(255) NOT NULL COMMENT '담당자',
    `tel` varchar(255) NOT NULL COMMENT '회사 연락처',
    `name` varchar(255) NOT NULL COMMENT '회사 이름',
    `zipcode` varchar(255) NOT NULL COMMENT '우편 번호',
    `address` varchar(255) NOT NULL COMMENT '업체 주소',
    `address_details` varchar(255) NOT NULL COMMENT '업체 세부 주소'
    );

CREATE TABLE IF NOT EXISTS `posts` (
     `id` integer PRIMARY KEY AUTO_INCREMENT,
     title varchar NOT NULL COMMENT '게시글 제목',
     `text` text COMMENT '게시글 콘텐츠',
     `category` ENUM ('NEWS') COMMENT '게시글 구분',
    `created_at` timestamp COMMENT '생성일',
    `deleted_at` timestamp COMMENT '삭제일',
    `user_id` integer COMMENT '작성자 FK'
    );

ALTER TABLE `user_enterprise_details` ADD FOREIGN KEY (`id`) REFERENCES `users` (`enterprise_id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `posts` (`user_id`);

# posts 테이블에 title column 추가
ALTER TABLE posts ADD title varchar(100);
