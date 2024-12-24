# 수기 영수증 텍스트 데이터 추출 분석

## 프로젝트 개요

### 1.1 프로젝트 추진 배경
- 자전거 국토 종주에 대한 전반적인 개요 및 개별 자전거길의 상세 설명과 비회원 이용가능, 회원가입을 통한 추가적인 정보 공유를 꾀함.

### 1.2 목적
- 안전한 국토종주 자전거 라이딩을 위한 정보 조회 및 공유 웹 서비스
- 자전거길의 후기 작성을 통한 회원 간의 공유 활성화
---

## 시스템 설계 내용

### 2.1 서비스 요구 사항
- 국토종주 자전거길 전체 조회
- 개별 자전거길 선택시 해당 자전거길의 상세정보 확인
- 로그인 탭에서 로그인 및 회원가입 / 중복 계정 확인
- 후기 작성 및 수정 시 권한 확인

---

## 팀 구성원별 작업 내용
- **FE**: 문형호 **BE**: 김수정
![홈화면](https://github.com/user-attachments/assets/24549e27-4feb-4e4f-bddc-c2e7c228b1f6)
----
![리스트](https://github.com/user-attachments/assets/d4ed090c-2215-4074-adeb-c11cd134e5d1)
----
![설명](https://github.com/user-attachments/assets/1feba110-513f-4a07-9dde-ee91dfb3d47b)
----
![로그인](https://github.com/user-attachments/assets/8244bce5-8659-41ed-83bb-6880337ef194)
----
![회원가입](https://github.com/user-attachments/assets/22b5c702-fe11-4fe8-8b00-43789ed69e71)
----
![후기](https://github.com/user-attachments/assets/cd806d3e-af72-4f5b-a67e-5284d384b595)
----
![후기상세](https://github.com/user-attachments/assets/9cf2a73a-38e9-4d4d-97ba-991e1c5466b0)
----
![후기수정](https://github.com/user-attachments/assets/d6aa6ddf-3b22-4b3c-b48b-26545c603128)

---

## 추진 일정 경과
- **2024-02-28 ~ 2024-04-04**
![세부 일정](https://github.com/user-attachments/assets/093dba05-0191-42a4-8caa-b9ad1b6d43ee)
---

## 아쉬운 점
1. 회원 가입 시 인증 방식 미흡.
2. 영수증 업로드 및 수정 시 회원 간 알림 기능 부재.

---

## 개선 사항

### FE
1. OAuth 로그인 기능 이해 부족.
2. 반응형 페이지 미완성.
3. 컴포넌트 재사용성 미흡.

### BE
1. OAuth 로그인 연결 부족.
2. N+1 문제 미해결.
3. 테스트 코드 미완성.

### DA
1. 손글씨 모델 완성도 부족.
2. 다양한 모델 시도.
3. 학습 데이터 부족.
4. 학습 미흡.

---

## 참고 자료
- 프로젝트 관련 참고 자료 목록 (작성 시 추가).
![참고자료](https://github.com/user-attachments/assets/ed598933-1e2e-46bd-af94-f453dc549740)
