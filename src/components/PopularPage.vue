<template>
  <div class="popular-page">
    <AppHeader />
    <div class="content-container">
      <h1 class="page-title">대세 콘텐츠</h1>

      <!-- 보기 형식 선택 -->
      <div class="view-toggle">
        <button @click="updateViewMode('table')">테이블 뷰</button>
        <button @click="updateViewMode('scroll')">무한 스크롤</button>
      </div>

      <!-- 테이블 뷰 -->
      <div v-if="viewMode === 'table'" class="table-view">
        <table>
          <thead>
            <tr>
              <th>포스터</th>
              <th>영화 제목</th>
              <th>평점</th>
              <th>개봉일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movie in paginatedMovies" :key="movie.id">
              <td>
                <img
                  :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
                  alt="Movie Poster"
                />
              </td>
              <td>{{ movie.title }}</td>
              <td>{{ movie.vote_average }}</td>
              <td>{{ movie.release_date }}</td>
            </tr>
            <tr v-if="!paginatedMovies.length">
              <td colspan="4">영화 데이터가 없습니다.</td>
            </tr>
          </tbody>
        </table>
        <!-- 페이지네이션 -->
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1">이전</button>
          <span>페이지 {{ currentPage }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
        </div>
      </div>

      <!-- 무한 스크롤 뷰 -->
      <div v-if="viewMode === 'scroll'" class="scroll-view">
        <div class="movies">
          <div v-for="movie in movies" :key="movie.id" class="movie-card">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt="Movie Poster"
            />
            <h3>{{ movie.title }}</h3>
            <p>평점: {{ movie.vote_average }}</p>
            <p>개봉일: {{ movie.release_date }}</p>
          </div>
        </div>
        <div v-if="loading" class="loading">로딩 중...</div>
        <div v-if="!loading && movies.length === 0" class="no-movies">
          대세 콘텐츠를 찾을 수 없습니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";

export default {
  components: { AppHeader },
  data() {
    return {
      movies: [], // 전체 영화 데이터
      paginatedMovies: [], // 페이지별 영화 데이터
      viewMode: "table", // 'table' 또는 'scroll'
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 10, // 테이블 뷰에서 한 페이지에 표시할 항목 수
      loading: false,
    };
  },
  methods: {
    async fetchPopularMovies(page = 1) {
      if (this.loading) return;

      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
      this.loading = true;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
          const newMovies = data.results.filter(
            (movie) => !this.movies.some((m) => m.id === movie.id)
          );
          this.movies = [...this.movies, ...newMovies];
          this.totalPages = data.total_pages;

          // 테이블 뷰를 위한 페이징 업데이트
          this.updatePaginatedMovies();
        }
      } catch (error) {
        console.error("영화 데이터를 가져오는 중 오류 발생:", error);
        alert("영화 데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        this.loading = false;
      }
    },
    updatePaginatedMovies() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      this.paginatedMovies = this.movies.slice(start, end);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updatePaginatedMovies();
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updatePaginatedMovies();
      }
    },
    handleScroll() {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (bottomReached && this.viewMode === "scroll" && !this.loading) {
        this.fetchPopularMovies(this.currentPage + 1);
      }
    },
    updateViewMode(mode) {
      this.viewMode = mode;
    },
  },
  created() {
    this.fetchPopularMovies();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* 기본 스타일 */
.popular-page {
  padding: 20px;
  background-color: #121212;
  color: white;
  min-height: 100vh;
}

.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.view-toggle {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.view-toggle button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-toggle button:hover {
  background-color: #0056b3;
}

.table-view table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  color: white;
}

.table-view th,
.table-view td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
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

.loading {
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
  color: #007bff;
}

.no-movies {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #555;
}
</style>
