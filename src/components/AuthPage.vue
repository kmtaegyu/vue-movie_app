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
      register() {
        if (this.signupData.password !== this.signupData.confirmPassword) {
            alert("Passwords do not match!");
            return;
            }

            const users = JSON.parse(localStorage.getItem("users") || "[]");
            users.push({ email: this.signupData.email, password: this.signupData.password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful! Please log in.");
            this.toggleView(); // 회원가입 후 로그인 화면으로 이동
        },
        login() {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const user = users.find(
            (u) =>
                u.email === this.loginData.email && u.password === this.loginData.password
            );

            if (user) {
            alert("Login successful!");
            // authToken 저장
            localStorage.setItem("authToken", user.email); // 이메일을 authToken으로 저장 (또는 다른 고유 값)

            this.$router.push("/"); // UserDashboard로 이동
            } else {
            alert("Invalid email or password.");
            }
        },
        },

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
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  