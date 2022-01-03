# mockup-server-express

해당 프로젝트는 웹/앱 개발시 매번 테스트 서버를 만들기 귀찮아 공통 목적으로 목업 서버의 역할로 사용할 서버입니다.

해당 프로젝트는 2개의 엔드 포인트를 제공합니다

```
/user

/book
```

해당 서버의 스펙은 `api.http` 명시되어 있으며 Visual Studio Code의 `RestClient` 플러그인으로 사용가능 합니다.



디팬던시 설치

npm install admin-bro @admin-bro/express --save

npm install express express-formidable --save

npm install express-session --save
 

DB 테이블 생성

CREATE TABLE ADMIN(
    ADMIN_NUMBER INT PRIMARY KEY AUTO_INCREMENT,
    ADMIN_ID VARCHAR(30) NOT NULL,
    ADMIN_NAME VARCHAR(30) NOT NULL,
    ADMIN_PASSWORD VARCHAR(100) NOT NULL,
    ADMIN_GRADE VARCHAR(30) NOT NULL
);


CREATE TABLE CONTRACT(
    DID_ID INT PRIMARY KEY,
    DID_MAKEBY DATE
);

CREATE TABLE USER(
    USER_NUMBER INT PRIMARY KEY AUTO_INCREMENT,
    USER_ID VARCHAR(30) NOT NULL,
    USER_NAME VARCHAR(30) NOT NULL,
    USER_PASSWORD VARCHAR(100) NOT NULL,
    USER_AGE INT NOT NULL,
    USER_GENDER CHAR(1) NOT NULL,
    USER_PHONE VARCHAR(30) NOT NULL,
    USER_EMAIL VARCHAR(30) NOT NULL,
    USER_PROGRAM VARCHAR(30) NOT NULL,
    USER_ADDRESS VARCHAR(100),
    USER_DID INT   
);

alter table user add foreign key(user_did) references contract(did_id);


insert into admin (admin_id,admin_name,admin_password,admin_grade) values ('admin','관리자','password','S');

insert into user (user_id,user_name,user_password,user_age,user_gender,user_phone,user_email,user_program) values('user1','수강생1','password',30,'B',010-1234-1234,'user1@codestates.com','BEB');

