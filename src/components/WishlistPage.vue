<template>
  <div class="wishlist-page">
    <AppHeader />
    <h2 class="page-title">내가 찜한 리스트</h2>
    <div v-if="wishlist.length" class="movies">
      <div v-for="movie in wishlist" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
        <h3>{{ movie.title }}</h3>
        <button @click="removeFromWishlist(movie)">Remove</button>
      </div>
    </div>
    <div v-else>
      <p>찜한 영화가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";

export default {
  components: { AppHeader },
  data() {
    return {
      wishlist: [], // 찜한 영화 목록
    };
  },
  methods: {
    loadWishlist() {
      const storedWishlist = localStorage.getItem("movieWishlist");
      this.wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
    },
    removeFromWishlist(movie) {
      this.wishlist = this.wishlist.filter((m) => m.id !== movie.id);
      localStorage.setItem("movieWishlist", JSON.stringify(this.wishlist));
    },
  },
  created() {
    this.loadWishlist(); // 페이지 생성 시 찜한 영화 목록 로드
  },
};
</script>

<style scoped>
.wishlist-page {
  padding: 20px;
  background-color: #121212;
  color: white;
  min-height: 100vh; /* 화면 전체 높이 */
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* 가로 배치 설정 */
.movies {
  display: flex !important;
  flex-wrap: nowrap !important;
  gap: 20px !important;
  overflow-x: auto !important;
  padding: 10px !important;
}

.movie-card {
  flex: 0 0 auto;
  width: 150px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.movie-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.movie-card h3 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.movie-card button {
  padding: 5px 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.movie-card button:hover {
  background-color: #c9302c;
}
</style>
