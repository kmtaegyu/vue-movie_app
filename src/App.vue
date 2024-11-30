<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


<script>
export default {
  name: "App", // 컴포넌트 이름
};
</script>

<style>
/* 전역 스타일 */
body, html {
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: white;
  height: 100%;
}

#app {
  min-height: 100vh; /* 앱 전체가 화면을 채우도록 설정 */
  background-color: #121212; /* 앱 배경색도 검정으로 설정 */
  color: white;
  margin-top: 80px; /* 상단바 높이에 맞게 여백 추가 */
  display: flex; /* 콘텐츠를 세로로 정렬 */
  flex-direction: column; /* 세로 방향 정렬 */
}

/* 페이지 전환 효과 (fade) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out; /* 페이드 효과 시간 */
}

.fade-enter, .fade-leave-to {
  opacity: 0; /* 페이드 효과 시작/끝 */
}

/* 미디어 쿼리 설정 */

/* 작은 화면(모바일) - 최대 너비 768px */
@media (max-width: 768px) {
  .movies {
    display: grid; /* 카드가 가로로 스크롤되지 않도록 그리드로 변경 */
    grid-template-columns: repeat(2, 1fr); /* 2열로 구성 */
    gap: 10px; /* 카드 간격 */
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
    grid-template-columns: repeat(3, 1fr); /* 3열로 구성 */
    gap: 15px;
  }

  .movie-card {
    width: 100%;
  }

  .section-title {
    font-size: 20px;
  }
}

/* 큰 화면(데스크톱) - 1025px 이상 */
@media (min-width: 1025px) {
  .movies {
    display: flex; /* 데스크톱에서는 가로로 스크롤 */
    gap: 20px;
  }

  .movie-card {
    flex: 0 0 auto; /* 고정된 너비 유지 */
    width: 150px;
  }

  .section-title {
    font-size: 24px;
  }
}

</style>
