import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from "axios";

const app = createApp(App);

// Toast 플러그인 설정
app.use(Toast, {
  timeout: 5000,
  position: "top-right",
});

// Vue Router 설정
app.use(router);

// Kakao SDK 초기화
if (!window.Kakao.isInitialized()) {
  window.Kakao.init(process.env.VUE_APP_KAKAO_API_KEY);
  console.log("Kakao SDK 초기화 완료:", window.Kakao.isInitialized());
}

// Access Token 요청 함수
async function fetchAccessToken(authCode) {
  console.log("Authorization Code:", authCode); // 인증 코드 확인
  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          client_id: process.env.VUE_APP_KAKAO_API_KEY,
          redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
          code: authCode,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = response.data;

    // Access Token을 localStorage에 저장
    localStorage.setItem("kakaoAccessToken", access_token);

    console.log("Access Token:", access_token);
    alert("로그인 성공!");
    
    // 인증 코드 제거
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, null, newUrl);

    // 대시보드로 이동
    router.push("/dashboard");
  } catch (error) {
    console.error("Access Token 요청 실패:", error.response?.data || error.message);
    alert("Access Token을 가져오는 데 실패했습니다.");
  }
}

// URL에서 인증 코드 추출
const urlParams = new URLSearchParams(window.location.search);
const authCode = urlParams.get("code");
console.log("인증 코드:", authCode); // 인증 코드 출력

// 인증 코드가 존재할 경우 처리
if (authCode) {
  // 인증 코드 중복 사용 방지 로직 추가
  if (!localStorage.getItem("usedAuthCode") || localStorage.getItem("usedAuthCode") !== authCode) {
    localStorage.setItem("usedAuthCode", authCode); // 인증 코드를 로컬 스토리지에 저장
    fetchAccessToken(authCode); // 인증 코드로 액세스 토큰 요청

    // URL에서 인증 코드 제거
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, null, newUrl);
    console.log("URL에서 인증 코드 제거 완료:", newUrl);
  } else {
    console.log("이미 사용된 인증 코드입니다."); // 중복 사용 방지 로그
  }
} else {
  console.warn("인증 코드가 URL에 존재하지 않습니다.");
}

// Vue 앱 마운트
app.mount("#app");
