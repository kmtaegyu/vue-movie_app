# Netflix-like Front-End Demo

## 프로젝트 개요
이 프로젝트는 Vue.js를 사용하여 Netflix와 유사한 단일 페이지 애플리케이션(SPA)을 구현한 것입니다. The Movie Database(TMDB) API를 사용하여 영화 데이터를 불러오고, GitHub Pages에 배포되었습니다.

## 필수 설치 사항
- [Node.js](https://nodejs.org/) 버전 16 이상
- [npm](https://www.npmjs.com/) (Node.js와 함께 설치됨)

## 설치 방법
1. 프로젝트를 클론합니다:
   ```bash
   git clone https://github.com/~~~.git

## 실행 방법
1. 개발 서버 실행
-  npm run serve

2. 프로덕션 빌드
-  npm run build
-  빌드된 파일은 dist/ 폴더에 생성됩니다.

3. 코드 린트
-  npm run lint
-  프로젝트 코드에서 발생할 수 있는 문제를 자동으로 검사하고    수정합니다.

## 의존성
1. 필수 의존성:
vue: Vue.js 프레임워크
vue-router: Vue.js 라우팅 관리
vue-toastification: 알림(Toast) 메시지 기능
@fortawesome/fontawesome-free: Font Awesome 아이콘 세트
hammerjs: 터치 이벤트 핸들링 라이브러리
core-js: 폴리필

2. 개발 의존성:
@babel/core: Babel 컴파일러
@vue/cli-service: Vue.js CLI 서비스
eslint: 코드 스타일 검사 및 오류 수정
eslint-plugin-vue: Vue.js 코드 스타일 검사 플러그인

------------------------------------------------------
과제 4

현재 상태

해결된 문제
1. Kakao 로그인 연동 완료
인증 코드와 Access Token을 정상적으로 받아오며, 로그인 기능이 정상 작동합니다.
2. Access Token 저장
Access Token을 LocalStorage에 저장해 상태를 유지합니다.
3. 인증 코드 중복 요청 방지
한 번 사용된 인증 코드는 다시 사용되지 않도록 처리했습니다.

미해결 문제
1. 로그인 후 대시보드로 이동하지 않는 문제
 - 로그인 후 router.push('/dashboard')가 동작하지 않음.
 - 콘솔에서 Access Token이 정상적으로 발급된 것을 확인했으나 페이지 전환이 이루어지지 않음.
 - 원인: Vue Router의 상태 갱신 문제로 추정.
2. WebSocket 연결 경고
 - 개발자 도구에서 WebSocket 연결 실패 경고 발생.
 - 현재 구현과는 직접적으로 관련 없는 부분으로, 추후 제거 필요.

 실행 방법
 npm run serve

배포 -> github