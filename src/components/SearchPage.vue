<template>
  <div class="search-page">
    <AppHeader />
    <div class="search-container">
      <h2 class="page-title">찾아보기</h2>
      
      <!-- 검색창 -->
      <div class="search-bar">
        <input 
          v-model="query" 
          @keyup.enter="searchMovies" 
          type="text" 
          placeholder="영화 제목을 입력하세요..." 
        />
        <button @click="searchMovies">검색</button>
      </div>

      <!-- 필터링 옵션 -->
      <div class="filter-options">
        <label>
          장르:
          <select v-model="selectedGenre" @change="filterMovies">
            <option value="">전체</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
        </label>
        <label>
          평점:
          <input 
            type="number" 
            v-model="minRating" 
            @input="filterMovies" 
            placeholder="최소 평점" 
          />
        </label>
        <label>
          개봉 연도:
          <input 
            type="number" 
            v-model="releaseYear" 
            @input="filterMovies" 
            placeholder="연도" 
          />
        </label>
      </div>

      <!-- 검색 결과 -->
      <div class="movies" v-if="filteredMovies.length">
        <div v-for="movie in filteredMovies" :key="movie.id" class="movie-card">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
          <h3>{{ movie.title }}</h3>
          <p>평점: {{ movie.vote_average }}</p>
          <p>개봉: {{ movie.release_date }}</p>
        </div>
      </div>

      <!-- 검색 결과 없음 -->
      <p v-else>검색 결과가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";

export default {
  components: { AppHeader },
  data() {
    return {
      query: "",
      genres: [],
      selectedGenre: "",
      minRating: "",
      releaseYear: "",
      movies: [],
      filteredMovies: [],
    };
  },
  methods: {
    async fetchGenres() {
      try{
        const apiKey = process.env.VUE_APP_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ko-KR`;
        const response = await fetch(url);
        const data = await response.json();
        this.genres = data.genres;
      } catch (error){
        console.error("장르 데이터를 가져오는 중 오류 발생:", error);
        this.genres = [];
      }
    },
    async searchMovies() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&query=${this.query}`;
      const response = await fetch(url);
      const data = await response.json();
      this.movies = data.results;
      this.filteredMovies = this.movies;
    },
    filterMovies() {
      this.filteredMovies = this.movies.filter((movie) => {
        const matchesGenre =
          this.selectedGenre === "" || movie.genre_ids.includes(Number(this.selectedGenre));
        const matchesRating =
          this.minRating === "" || movie.vote_average >= Number(this.minRating);
        const matchesYear =
          this.releaseYear === "" || movie.release_date?.startsWith(this.releaseYear);
        return matchesGenre && matchesRating && matchesYear;
      });
    },
  },
  created() {
    this.fetchGenres();
  },
};
</script>

<style scoped>
.search-page {
  padding: 80px 20px 20px; /* 상단바 아래로 여백 추가 */
  background-color: #121212;
  color: white;
  min-height: 100vh;
  box-sizing: border-box; /* 패딩이 포함되도록 설정 */
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.search-container {
  max-width: 1080px;
  margin: 0 auto;
  background-color: #121212;/* 추가 확인용: 검색 컨테이너 배경색 */
}

.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.filter-options {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.movie-card {
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
}

.movie-card h3 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}

.movie-card p {
  font-size: 12px;
  color: #555;
}
</style>
