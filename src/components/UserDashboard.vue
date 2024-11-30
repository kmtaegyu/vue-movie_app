<template>
  <div class="dashboard">
    <!-- 상단바 -->
    <AppHeader />
    <h1>Welcome to User Dashboard</h1>
    <button @click="logout" class="logout-button">Logout</button> <!-- 로그아웃 버튼 -->
    
    <!-- 로딩 상태 -->
     <div v-if="loading" class="loading">로딩 중...</div>
    
    <!-- 인기 영화 섹션 -->
    <div class="section" v-if="popularMovies.length">
      <h2 class="section-title">인기 영화</h2>
      <div class="movies">
        <div v-for="movie in popularMovies" :key="movie.id" class="movie-card">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
          <h3>{{ movie.title }}</h3>
          <!-- 찜하기 버튼 -->
          <button @click="toggleWishlist(movie)" class="wishlist-button">
            {{ isInWishlist(movie) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 최신 영화 섹션 -->
    <div class="section" v-if="latestMovies.length">
      <h2 class="section-title">최신 영화</h2>
      <div class="movies">
        <div v-for="movie in latestMovies" :key="movie.id" class="movie-card">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
          <h3>{{ movie.title }}</h3>
          <!-- 찜하기 버튼 -->
          <button @click="toggleWishlist(movie)" class="wishlist-button">
            {{ isInWishlist(movie) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 액션 영화 섹션 -->
    <div class="section" v-if="actionMovies.length">
      <h2 class="section-title">액션 영화</h2>
      <div class="movies">
        <div v-for="movie in actionMovies" :key="movie.id" class="movie-card">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
          <h3>{{ movie.title }}</h3>
          <!-- 찜하기 버튼 -->
          <button @click="toggleWishlist(movie)" class="wishlist-button">
            {{ isInWishlist(movie) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

---

### 스크립트 로직

```javascript
<script>
import AppHeader from "./AppHeader.vue";
//import Toast from "vue-toastification"; // Toast 라이브러리 임포트
import "vue-toastification/dist/index.css";
import Hammer from "hammerjs";

export default {
  components: { AppHeader },
  data() {
    return {
      loading: false, // 로딩 상태
      popularMovies: [],
      latestMovies: [],
      actionMovies: [],
      wishlist: [], // 찜한 영화 목록
    };
  },
  methods: {
    async fetchMovies() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      if (!apiKey) {
        console.error('API Key가 설정되지 않았습니다. .env 파일을 확인해주세요.');
        return;
      }


      // 네트워크 상태 확인
      if (!navigator.onLine) {
        this.showErrorMessage("네트워크 연결이 끊어졌습니다. 연결 상태를 확인해주세요.");
        return;
      }

      this.loading = true; // 로딩 시작
      try {
        // 인기 영화 데이터 가져오기
        const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;
        const popularResponse = await fetch(popularUrl);
        if (!popularResponse.ok) throw new Error(`Error ${popularResponse.status}: ${popularResponse.statusText}`);
        const popularData = await popularResponse.json();
        this.popularMovies = popularData.results;

        // 최신 영화 데이터 가져오기
        const latestUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=1`;
        const latestResponse = await fetch(latestUrl);
        if (!latestResponse.ok) throw new Error(`Error ${latestResponse.status}: ${latestResponse.statusText}`);
        const latestData = await latestResponse.json();
        this.latestMovies = latestData.results;

        // 액션 영화 데이터 가져오기
        const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&with_genres=28&page=1`;
        const actionResponse = await fetch(actionUrl);
        if (!actionResponse.ok) throw new Error(`Error ${actionResponse.status}: ${actionResponse.statusText}`);
        const actionData = await actionResponse.json();
        this.actionMovies = actionData.results;
      } catch (error) {
          console.error('Error fetching movies:', error);
          this.showErrorMessage('영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.');
        
      } finally {
        this.loading = false; // 로딩 종료
      }
    },
    toggleWishlist(movie) {
      const index = this.wishlist.findIndex((m) => m.id === movie.id);
      if (index === -1) {
        this.wishlist.push(movie);
      } else {
        this.wishlist.splice(index, 1);
      }
      localStorage.setItem("movieWishlist", JSON.stringify(this.wishlist));
    },
    isInWishlist(movie) {
      return this.wishlist.some((m) => m.id === movie.id);
    },
    loadWishlist() {
      const storedWishlist = localStorage.getItem("movieWishlist");
      this.wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
    },
    logout() {
      localStorage.removeItem("authToken"); // 인증 토큰 삭제
      this.$router.push("/"); // 로그인 화면으로 이동
    },
    showErrorMessage(message) {
      this.$toast.error(message, {
        timeout: 5000,
      });
    },
  },
  created() {
    this.loadWishlist();
    this.fetchMovies();
  },
  setupSwipe() {
    const movieContainers = document.querySelectorAll(".movies");
    movieContainers.forEach((container) => {
      const hammer = new Hammer(container);
      // 왼쪽으로 스와이프 시
      hammer.on("swipeleft", () => {
        container.scrollBy({
          left: 300, // 오른쪽으로 300px 스크롤            
          behavior: "smooth",
        });
      });

      // 오른쪽으로 스와이프 시
      hammer.on("swiperight", () => {
        container.scrollBy({            left: -300, // 왼쪽으로 300px 스크롤
          behavior: "smooth",
        });
      });
    });
  },
  mounted() {
    this.loadWishlist();
    this.fetchMovies();
      // setupSwipe 호출
//    if (typeof this.setupSwipe === "function") {
//      this.setupSwipe();
//    } else {
//      console.error("setupSwipe is not defined or not a function.");
//    }
  },
};
</script>

<style scoped>
/* 전체 대시보드 */
.dashboard {
  padding-top: 1px; /* 상단바 높이에 맞춘 여백 */
  background-color: #121212;
  color: white;
  min-height: 100vh; /* 화면 전체 높이 */
}

.AppHeader {
  position: fixed; /* 상단바를 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* 상단바 높이 */
  background-color: #333; /* 상단바 배경색 */
  z-index: 1000; /* 다른 요소 위로 나오도록 설정 */
}

/* 섹션 컨테이너 */
.section {
  margin-bottom: 60px; /* 각 섹션 간격 */
}

/* 섹션 제목 스타일 */
.section-title {
  font-size: 24px;
  font-weight: bold;
  color: white; /* 텍스트가 배경과 동일한 색인지 확인 */
  margin: 20px 0 10px 20px; /* 제목 간격 조정 */
  visibility: visible !important; /* 보이도록 강제 설정 */
  display: block; /* 블록 요소로 강제 변환 */
  z-index: 1; /* 다른 요소 아래로 숨겨지지 않도록 */
}

/* 영화 카드 컨테이너 */
.movies {
  display: flex;
  gap: 20px; /* 카드 간격 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  padding: 0 20px;
}

/* 개별 영화 카드 */
.movie-card {
  flex: 0 0 auto; /* 고정된 너비 */
  width: 150px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 영화 카드 Hover 효과 */
.movie-card:hover {
  transform: scale(1.05); /* 카드 전체 크기 확대 */
  transition: transform 0.3s ease-in-out; /* 부드러운 확대 애니메이션 */
}

/* 영화 이미지 */
.movie-card img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out; /* 이미지 확대 효과 */
}
.movie-card:hover img {
  transform: scale(1.1); /* 이미지만 확대 */
}

/* 영화 제목 */
.movie-card h3 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; /* 텍스트 강조 애니메이션 */
}
.movie-card:hover h3 {
  color: #007bff; /* 강조 색상 */
  transform: scale(1.1); /* 텍스트 확대 */
}

/* 찜하기 버튼 */
.wishlist-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.wishlist-button:hover {
  background-color: #0056b3;
}

.logout-button {
  background-color: #d9534f; /* 로그아웃 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 20px 0;
}

.logout-button:hover {
  background-color: #c9302c; /* 호버 시 색상 */
}

/* 작은 화면(모바일) - 최대 너비 768px */
@media (max-width: 768px) {
  .movies {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2열 그리드 */
    gap: 10px;
  }

  .movie-card {
    width: 100%; /* 카드 크기를 그리드에 맞게 조정 */
  }

  .section-title {
    font-size: 18px; /* 섹션 제목 크기 축소 */
  }
}

/* 중간 화면(태블릿) - 769px에서 1024px */
@media (min-width: 769px) and (max-width: 1024px) {
  .movies {
    grid-template-columns: repeat(3, 1fr); /* 3열 그리드 */
    gap: 15px;
  }

  .movie-card {
    width: 100%; /* 카드 크기를 조정 */
  }

  .section-title {
    font-size: 20px; /* 섹션 제목 크기 */
  }
}

/* 큰 화면(데스크톱) - 1025px 이상 */
@media (min-width: 1025px) {
  .movies {
    display: flex; /* 데스크톱에서는 가로 스크롤 */
    gap: 20px;
  }

  .movie-card {
    flex: 0 0 auto; /* 고정된 너비 */
    width: 150px;
  }

  .section-title {
    font-size: 24px; /* 기본 섹션 제목 크기 */
  }
}

</style>