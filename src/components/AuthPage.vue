<template>
  <div class="auth-page">
    <transition name="fade">
      <div v-if="isLoginView" key="login">
        <!-- 로그인 화면 -->
        <form class="auth-form" @submit.prevent="login">
          <h2>Sign in</h2>
          <input v-model="loginData.email" type="email" placeholder="Email" required />
          <input v-model="loginData.password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>
            Don't have an account?
            <a href="#" @click.prevent="toggleView">Sign up</a>
          </p>
        </form>
        <!-- 카카오 로그인 버튼 -->
        <button class="kakao-login-button" @click.prevent="kakaoLogin">카카오 로그인</button>
      </div>

      <div v-else key="signup">
        <!-- 회원가입 화면 -->
        <form class="auth-form" @submit.prevent="register">
          <h2>Sign up</h2>
          <input v-model="signupData.email" type="email" placeholder="Email" required />
          <input v-model="signupData.password" type="password" placeholder="Password" required />
          <input
            v-model="signupData.confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <label>
            <input v-model="signupData.termsAccepted" type="checkbox" required /> I accept the terms
          </label>
          <button type="submit">Register</button>
          <p>
            Already have an account?
            <a href="#" @click.prevent="toggleView">Sign in</a>
          </p>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLoginView: true, // true면 로그인 화면, false면 회원가입 화면
      loginData: { email: "", password: "" },
      signupData: { email: "", password: "", confirmPassword: "", termsAccepted: false },
    };
  },
  methods: {
    toggleView() {
      this.isLoginView = !this.isLoginView; // 로그인/회원가입 화면 전환
    },
    async hashPassword(password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    },
    async register() {
      // 중복 이메일 확인
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some((u) => u.email === this.signupData.email)) {
        alert("This email is already registered!");
        return;
      }

      // 비밀번호 일치 확인
      if (this.signupData.password !== this.signupData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // 약관 동의 확인
      if (!this.signupData.termsAccepted) {
        alert("You must accept the terms to register.");
        return;
      }

      // 비밀번호 암호화
      const hashedPassword = await this.hashPassword(this.signupData.password);

      users.push({ email: this.signupData.email, password: hashedPassword });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Please log in.");
      this.toggleView(); // 회원가입 후 로그인 화면으로 이동
    },
    async login() {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const hashedPassword = await this.hashPassword(this.loginData.password);

      const user = users.find(
        (u) =>
          u.email === this.loginData.email && u.password === hashedPassword
      );

      if (user) {
        alert(`Welcome, ${this.loginData.email}!`);
        localStorage.setItem("authToken", user.email); // 이메일을 authToken으로 저장
        this.$router.push("/dashboard"); // UserDashboard로 이동
      } else {
        alert("Invalid email or password.");
      }
    },
    kakaoLogin() {
      if (!window.Kakao.isInitialized()) {
        alert("Kakao SDK가 초기화되지 않았습니다.");
        return;
      }

      // 리다이렉트 URI 확인
      console.log("Redirect URI:", process.env.VUE_APP_KAKAO_REDIRECT_URI);
      
      // 카카오 로그인 요청
      window.Kakao.Auth.authorize({
        redirectUri: process.env.VUE_APP_KAKAO_REDIRECT_URI, // Redirect URI를 환경 변수로 설정
        
      });
        // URL에서 인증 코드 추출
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");
      console.log("추출된 인증 코드:", authCode); // 인증 코드 확인
      const url = new URL(window.location.href);
      if (url.searchParams.has("code")) {
        const authCode = url.searchParams.get("code");
        console.log("Authorization Code:", authCode);
        url.searchParams.delete("code"); // URL에서 인증 코드 제거
        window.history.replaceState({}, document.title, url.toString());
        console.log("URL에서 인증 코드 제거 완료:", url.toString());
      }

    },


    async fetchAccessToken(authCode) {
      console.log("Authorization Code로 Access Token 요청 시작:", authCode); // 인증 코드 출력
      
      // 중복 인증 코드 요청 방지
      if (localStorage.getItem("usedAuthCode") === authCode) {
        console.warn("이미 사용된 인증 코드입니다.");
        alert("이 인증 코드는 이미 사용되었습니다. 다시 로그인해주세요.");
        return;
      }

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

        console.log("Access Token 응답 데이터:", response.data); // 액세스 토큰 응답 확인
        
        
        console.log("Access Token:", access_token);
        localStorage.setItem("kakaoAccessToken", access_token);
        localStorage.setItem("usedAuthCode", authCode); // 사용된 인증 코드 저장
        alert("카카오 로그인 성공!");
        

        // 인증 코드 제거
        //const newUrl = window.location.origin + window.location.pathname;
        //window.history.replaceState(null, null, newUrl);
        //인증 코드 제거 후 URL 정리
        //const url = new URL(window.location.href);
        //url.searchParams.delete("code");
        //window.history.replaceState({}, document.title, url.toString());
        //console.log("URL에서 인증 코드 제거 완료:", url.toString());
        

        // 사용자 정보 가져오기
        await this.fetchUserInfo(access_token);
        // 대시보드로 이동
        //this.$router.push("/dashboard");
        
        this.$router.push("/dashboard").catch((err) => {
          console.error("Router navigation failed:", err);
        });

        //this.$router.replace({ path: "/dashboard" });

      } catch (error) {
        console.error("Access Token 요청 실패:", error.response || error.message || error);
        alert("Access Token을 가져오는 데 실패했습니다.");
      }

    },

    async fetchUserInfo(accessToken) {
      try {
        console.log("전달된 액세스 토큰:", accessToken);

        const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log("카카오 사용자 정보 API 응답:", response.data); // 응답 데이터 확인

        //const { kakao_account, properties } = response.data;
        const { properties } = response.data;
        const nickname = properties?.nickname || "Anonymous";
        //const email = kakao_account?.email || "No email";
        const profileImage = properties?.profile_image || "";


        localStorage.setItem("nickname", nickname);
        //localStorage.setItem("email", email);
        localStorage.setItem("profileImage", profileImage);

        console.log("사용자 정보 저장 완료:", { nickname, profileImage });
        alert(`환영합니다, ${nickname}!`);
        //console.log("사용자 정보:", response.data);

        this.$router.push("/dashboard");
      } catch (error) {
        console.error("사용자 정보 요청 실패:", error.response?.data || error.message);
        alert("사용자 정보를 가져오는 데 실패했습니다.");
      }
      console.log("사용자 정보 가져오기 성공!");
      //this.$router.push("/dashboard"); // 대시보드로 이동
    },


  },
  created() {
  // URL에서 인증 코드 추출
  const urlParams = new URLSearchParams(window.location.search);
  const authCode = urlParams.get("code");
  console.log("URL에서 추출된 인증 코드:", authCode);

    if (authCode) {
      // 인증 코드가 있을 경우 처리
      this.fetchAccessToken(authCode);

      // URL에서 인증 코드 제거
      const url = new URL(window.location.href);
      url.searchParams.delete("code");
      window.history.replaceState({}, document.title, url.toString());
      console.log("URL에서 인증 코드 제거 완료:", url.toString());
    }
  }

};
</script>

<style scoped>
/* 전체 페이지 스타일 */
.auth-page {
  background: linear-gradient(135deg, #1e1e1e, #000000);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* 폼 스타일 */
.auth-form {
  background: #222;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

.auth-form h2 {
  margin-bottom: 20px;
}

.auth-form input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.auth-form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.auth-form button:hover {
  background-color: #0056b3;
}

.auth-form p {
  margin-top: 10px;
}

/* 페이드 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.kakao-login-button {
  width: 100%;
  padding: 10px;
  background-color: #fee500;
  color: #181600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}

.kakao-login-button:hover {
  background-color: #ffd900;
}
</style>
