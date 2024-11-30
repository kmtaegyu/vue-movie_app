import { createApp } from 'vue'; // Vue 3 가져오기
import App from './App.vue'; // 루트 컴포넌트
import router from './router'; // Vue Router 가져오기
import "@fortawesome/fontawesome-free/css/all.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Vue 앱 생성 및 라우터 통합
//createApp(App)
//  .use(router) // Vue Router 사용
//  .mount('#app'); // 앱을 DOM에 마운트

// Vue 앱 생성
const app = createApp(App);

// Toast 플러그인 등록
app.use(Toast, {
  // 옵션 설정 (원하는 설정으로 변경 가능)
  timeout: 5000, // 기본 토스트 표시 시간
  position: "top-right", // 기본 위치
});

// Vue Router 사용
app.use(router);

// 앱을 DOM에 마운트
app.mount('#app');