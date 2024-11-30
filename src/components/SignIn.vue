<template>
  <div class="login-container">
    <h2>Sign In</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === this.email && u.password === this.password);

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        this.$router.push("/"); // 로그인 성공 후 대시보드로 이동
      } else {
        alert("Invalid email or password.");
      }
    },
  },
};
</script>

  
  <style>
  /* 로그인 페이지 스타일 */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: url('https://via.placeholder.com/1920x1080') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
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
  
  .signup {
    margin-top: 15px;
    font-size: 14px;
  }
  
  .signup .signup-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .signup .signup-link:hover {
    text-decoration: underline;
  }
  </style>
  