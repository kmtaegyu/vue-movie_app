<template>
  <header class="navbar">
    <div class="logo">
      <h1>MovieApp</h1>
    </div>
    <nav class="navbar-links">
      <router-link to="/">홈</router-link>
      <router-link to="/popular">대세 콘텐츠</router-link>
      <router-link to="/search">찾아보기</router-link>
      <router-link to="/wishlist">내가 찜한 콘텐츠</router-link>
      <button class="logout-button" @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    logout() {
      // Local Storage에서 authToken 삭제
      localStorage.removeItem("authToken");

      // 로그인 페이지로 이동
      this.$router.push("/auth");
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* 상단바의 고정 높이 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: rgba(28, 28, 28, 0.9);
  color: white;
  z-index: 1000; /* 콘텐츠 위로 표시 */
}

.navbar .logo h1 {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.navbar-links {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 오른쪽 정렬 */
  gap: 10px;
  margin-right: 50px; /* 오른쪽 간격 줄이기 */
}

.navbar-links a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-size: 16px;
}

.navbar-links a:hover {
  text-decoration: underline;
}
.logout-button {
  margin-left: 15px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #c9302c;
}
</style>
