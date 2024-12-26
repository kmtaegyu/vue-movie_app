/* eslint-disable */

import { createRouter, createWebHistory } from 'vue-router'; // Vue Router 4.x 가져오기
import AuthPage from "../components/AuthPage.vue"; // 로그인 및 회원가입 페이지
import UserDashboard from "../components/UserDashboard.vue"; // 대시보드 페이지
import NotFound from "../components/NotFound.vue"; // 404 페이지
import PopularPage from "../components/PopularPage.vue"; // 대세 콘텐츠 페이지
import SearchPage from "../components/SearchPage.vue"; // 찾아보기 페이지
import WishlistPage from "../components/WishlistPage.vue"; // 내가 찜한 콘텐츠 페이지
import MovieDetails from "../components/MovieDetails.vue"; // 영화 세부정보 페이지

// 경로와 컴포넌트 매핑
const routes = [
  //{ path: "/", redirect: "/auth" }, // 기본 경로: 로그인 및 회원가입 페이지로 리디렉션
  { path: "/", component: AuthPage }, // 로그인 및 회원가입
  { 
    path: "/dashboard", 
    component: UserDashboard,
    meta: { requiresAuth: true }, // 로그인 필요
  },
  { 
    path: "/popular", 
    component: PopularPage, 
    meta: { requiresAuth: true }, // 로그인 필요
  },
  { 
    path: "/search", 
    component: SearchPage, 
    meta: { requiresAuth: true }, // 로그인 필요
  },
  { 
    path: "/wishlist", 
    component: WishlistPage, 
    meta: { requiresAuth: true }, // 로그인 필요
  },
  { 
    path: "/movie/:id", 
    component: MovieDetails, 
    meta: { requiresAuth: true }, // 로그인 필요
  },
  //{
  //  path: "/auth",
  //  component: {
  //    template: "<div>Redirecting...</div>",
  //    created() {
  //      const code = new URLSearchParams(window.location.search).get("code");
  //      if (code) {
  //        this.$router.app.config.globalProperties.$fetchAccessToken(code);
  //      } else {
  //        alert("카카오 로그인 실패: 인증 코드가 없습니다.");
  //        this.$router.push("/");
  //      }
  //    },
  //  },
  //},
  { 
    path: "/auth", 
    redirect: "/dashboard" // /auth로 리다이렉트될 경우 /dashboard로 이동
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // 404 페이지
];

// Vue Router 생성
const router = createRouter({
  history: createWebHistory(), // 브라우저 히스토리 모드 사용
  routes, // 정의된 경로 사용
});

// 라우터 가드 설정
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // 로그인 여부 확인

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/"); // 로그인 페이지로 리디렉션
  } else {
    next(); // 다음 경로로 이동
  }
});

export default router;