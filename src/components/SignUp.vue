<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleRegister">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
    <router-link to="/signin">Go to Sign In</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((u) => u.email === this.email);

      if (userExists) {
        alert("Email already registered.");
      } else {
        users.push({ email: this.email, password: this.password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        this.$router.push("/signin"); // 회원가입 성공 후 로그인 페이지로 이동
      }
    },
  },
};
</script>

  
  <style>
  /* 회원가입 페이지 스타일 */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .login-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    width: 350px;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .btn-login {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
  }
  
  .btn-login:hover {
    background-color: #0056b3;
  }
  
  .signin {
    margin-top: 15px;
    font-size: 14px;
  }
  
  .signin .signin-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .signin .signin-link:hover {
    text-decoration: underline;
  }
  </style>
  