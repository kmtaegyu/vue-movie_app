(function(){"use strict";var e={7598:function(e,t,s){var i=s(5130),o=s(6768);const a={id:"app"};function l(e,t,s,l,n,r){const u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(u,null,{default:(0,o.k6)((({Component:e})=>[(0,o.bF)(i.eB,{name:"fade",mode:"out-in"},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e)))])),_:2},1024)])),_:1})])}var n={name:"App"},r=s(1241);const u=(0,r.A)(n,[["render",l]]);var c=u,d=s(1387);const h={class:"auth-page"},p={key:"login"},v={key:"signup"};function g(e,t,s,a,l,n){return(0,o.uX)(),(0,o.CE)("div",h,[(0,o.bF)(i.eB,{name:"fade"},{default:(0,o.k6)((()=>[l.isLoginView?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("form",{class:"auth-form",onSubmit:t[3]||(t[3]=(0,i.D$)(((...e)=>n.login&&n.login(...e)),["prevent"]))},[t[11]||(t[11]=(0,o.Lk)("h2",null,"Sign in",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.loginData.email=e),type:"email",placeholder:"Email",required:""},null,512),[[i.Jo,l.loginData.email]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.loginData.password=e),type:"password",placeholder:"Password",required:""},null,512),[[i.Jo,l.loginData.password]]),t[12]||(t[12]=(0,o.Lk)("button",{type:"submit"},"Login",-1)),(0,o.Lk)("p",null,[t[10]||(t[10]=(0,o.eW)(" Don't have an account? ")),(0,o.Lk)("a",{href:"#",onClick:t[2]||(t[2]=(0,i.D$)(((...e)=>n.toggleView&&n.toggleView(...e)),["prevent"]))},"Sign up")])],32)])):((0,o.uX)(),(0,o.CE)("div",v,[(0,o.Lk)("form",{class:"auth-form",onSubmit:t[9]||(t[9]=(0,i.D$)(((...e)=>n.register&&n.register(...e)),["prevent"]))},[t[15]||(t[15]=(0,o.Lk)("h2",null,"Sign up",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.signupData.email=e),type:"email",placeholder:"Email",required:""},null,512),[[i.Jo,l.signupData.email]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>l.signupData.password=e),type:"password",placeholder:"Password",required:""},null,512),[[i.Jo,l.signupData.password]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>l.signupData.confirmPassword=e),type:"password",placeholder:"Confirm Password",required:""},null,512),[[i.Jo,l.signupData.confirmPassword]]),(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>l.signupData.termsAccepted=e),type:"checkbox",required:""},null,512),[[i.lH,l.signupData.termsAccepted]]),t[13]||(t[13]=(0,o.eW)(" I accept the terms "))]),t[16]||(t[16]=(0,o.Lk)("button",{type:"submit"},"Register",-1)),(0,o.Lk)("p",null,[t[14]||(t[14]=(0,o.eW)(" Already have an account? ")),(0,o.Lk)("a",{href:"#",onClick:t[8]||(t[8]=(0,i.D$)(((...e)=>n.toggleView&&n.toggleView(...e)),["prevent"]))},"Sign in")])],32)]))])),_:1})])}s(4114),s(8992),s(2577);var m={data(){return{isLoginView:!0,loginData:{email:"",password:""},signupData:{email:"",password:"",confirmPassword:"",termsAccepted:!1}}},methods:{toggleView(){this.isLoginView=!this.isLoginView},register(){if(this.signupData.password!==this.signupData.confirmPassword)return void alert("Passwords do not match!");const e=JSON.parse(localStorage.getItem("users")||"[]");e.push({email:this.signupData.email,password:this.signupData.password}),localStorage.setItem("users",JSON.stringify(e)),alert("Registration successful! Please log in."),this.toggleView()},login(){const e=JSON.parse(localStorage.getItem("users")||"[]"),t=e.find((e=>e.email===this.loginData.email&&e.password===this.loginData.password));t?(alert("Login successful!"),localStorage.setItem("authToken",t.email),this.$router.push("/")):alert("Invalid email or password.")}}};const k=(0,r.A)(m,[["render",g],["__scopeId","data-v-515483ec"]]);var f=k,b=s(4232);const w={class:"dashboard"},L={key:0,class:"loading"},y={key:1,class:"section"},_={class:"movies"},M=["src"],C=["onClick"],E={key:2,class:"section"},P={class:"movies"},X=["src"],W=["onClick"],I={key:3,class:"section"},A={class:"movies"},S=["src"],D=["onClick"];function F(e,t,s,i,a,l){const n=(0,o.g2)("AppHeader");return(0,o.uX)(),(0,o.CE)("div",w,[(0,o.bF)(n),t[4]||(t[4]=(0,o.Lk)("h1",null,"Welcome to User Dashboard",-1)),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e)),class:"logout-button"},"Logout"),a.loading?((0,o.uX)(),(0,o.CE)("div",L,"로딩 중...")):(0,o.Q3)("",!0),a.popularMovies.length?((0,o.uX)(),(0,o.CE)("div",y,[t[1]||(t[1]=(0,o.Lk)("h2",{class:"section-title"},"인기 영화",-1)),(0,o.Lk)("div",_,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.popularMovies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"Movie Poster"},null,8,M),(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("button",{onClick:t=>l.toggleWishlist(e),class:"wishlist-button"},(0,b.v_)(l.isInWishlist(e)?"Remove from Wishlist":"Add to Wishlist"),9,C)])))),128))])])):(0,o.Q3)("",!0),a.latestMovies.length?((0,o.uX)(),(0,o.CE)("div",E,[t[2]||(t[2]=(0,o.Lk)("h2",{class:"section-title"},"최신 영화",-1)),(0,o.Lk)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.latestMovies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"Movie Poster"},null,8,X),(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("button",{onClick:t=>l.toggleWishlist(e),class:"wishlist-button"},(0,b.v_)(l.isInWishlist(e)?"Remove from Wishlist":"Add to Wishlist"),9,W)])))),128))])])):(0,o.Q3)("",!0),a.actionMovies.length?((0,o.uX)(),(0,o.CE)("div",I,[t[3]||(t[3]=(0,o.Lk)("h2",{class:"section-title"},"액션 영화",-1)),(0,o.Lk)("div",A,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.actionMovies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"Movie Poster"},null,8,S),(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("button",{onClick:t=>l.toggleWishlist(e),class:"wishlist-button"},(0,b.v_)(l.isInWishlist(e)?"Remove from Wishlist":"Add to Wishlist"),9,D)])))),128))])])):(0,o.Q3)("",!0)])}s(3949),s(7550);const $={class:"navbar"},V={class:"navbar-links"};function R(e,t,s,i,a,l){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",$,[t[5]||(t[5]=(0,o.Lk)("div",{class:"logo"},[(0,o.Lk)("h1",null,"MovieApp")],-1)),(0,o.Lk)("nav",V,[(0,o.bF)(n,{to:"/dashboard"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("홈")]))),_:1}),(0,o.bF)(n,{to:"/popular"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("대세 콘텐츠")]))),_:1}),(0,o.bF)(n,{to:"/search"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("찾아보기")]))),_:1}),(0,o.bF)(n,{to:"/wishlist"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("내가 찜한 콘텐츠")]))),_:1}),(0,o.Lk)("button",{class:"logout-button",onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e))},"Logout")])])}var q={name:"AppHeader",methods:{logout(){localStorage.removeItem("authToken"),this.$router.push("/")}}};const O=(0,r.A)(q,[["render",R],["__scopeId","data-v-69136715"]]);var K=O,j=(s(7917),s(4009)),J=s.n(j),x={components:{AppHeader:K},data(){return{loading:!1,popularMovies:[],latestMovies:[],actionMovies:[],wishlist:[]}},methods:{async fetchMovies(){const e="82313e915c2066d13bffefeeb13b1d31";if(e)if(navigator.onLine){this.loading=!0;try{const t=`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=1`,s=await fetch(t);if(!s.ok)throw new Error(`Error ${s.status}: ${s.statusText}`);const i=await s.json();this.popularMovies=i.results;const o=`https://api.themoviedb.org/3/movie/now_playing?api_key=${e}&language=ko-KR&page=1`,a=await fetch(o);if(!a.ok)throw new Error(`Error ${a.status}: ${a.statusText}`);const l=await a.json();this.latestMovies=l.results;const n=`https://api.themoviedb.org/3/discover/movie?api_key=${e}&language=ko-KR&with_genres=28&page=1`,r=await fetch(n);if(!r.ok)throw new Error(`Error ${r.status}: ${r.statusText}`);const u=await r.json();this.actionMovies=u.results}catch(t){console.error("Error fetching movies:",t),this.showErrorMessage("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.")}finally{this.loading=!1}}else this.showErrorMessage("네트워크 연결이 끊어졌습니다. 연결 상태를 확인해주세요.");else console.error("API Key가 설정되지 않았습니다. .env 파일을 확인해주세요.")},toggleWishlist(e){const t=this.wishlist.findIndex((t=>t.id===e.id));-1===t?this.wishlist.push(e):this.wishlist.splice(t,1),localStorage.setItem("movieWishlist",JSON.stringify(this.wishlist))},isInWishlist(e){return this.wishlist.some((t=>t.id===e.id))},loadWishlist(){const e=localStorage.getItem("movieWishlist");this.wishlist=e?JSON.parse(e):[]},logout(){localStorage.removeItem("authToken"),this.$router.push("/")},showErrorMessage(e){this.$toast.error(e,{timeout:5e3})}},created(){this.loadWishlist(),this.fetchMovies()},setupSwipe(){const e=document.querySelectorAll(".movies");e.forEach((e=>{const t=new(J())(e);t.on("swipeleft",(()=>{e.scrollBy({left:300,behavior:"smooth"})})),t.on("swiperight",(()=>{e.scrollBy({left:-300,behavior:"smooth"})}))}))},mounted(){this.loadWishlist(),this.fetchMovies()}};const H=(0,r.A)(x,[["render",F],["__scopeId","data-v-5511bd3c"]]);var N=H;const U={class:"not-found"};function Q(e,t,s,i,a,l){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",U,[t[1]||(t[1]=(0,o.Lk)("h1",null,"404 - Page Not Found",-1)),(0,o.bF)(n,{to:"/"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Go to Sign In")]))),_:1})])}var G={name:"NotFound"};const T=(0,r.A)(G,[["render",Q],["__scopeId","data-v-724d1e81"]]);var Y=T;const B={class:"popular-page"},z={class:"content-container"},Z={class:"view-toggle"},ee={key:0,class:"table-view"},te=["src"],se={key:0},ie={class:"pagination"},oe=["disabled"],ae=["disabled"],le={key:1,class:"scroll-view"},ne={class:"movies"},re=["src"],ue={key:0,class:"loading"},ce={key:1,class:"no-movies"};function de(e,t,s,i,a,l){const n=(0,o.g2)("AppHeader");return(0,o.uX)(),(0,o.CE)("div",B,[(0,o.bF)(n),(0,o.Lk)("div",z,[t[6]||(t[6]=(0,o.Lk)("h1",{class:"page-title"},"대세 콘텐츠",-1)),(0,o.Lk)("div",Z,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>l.updateViewMode("table"))},"테이블 뷰"),(0,o.Lk)("button",{onClick:t[1]||(t[1]=e=>l.updateViewMode("scroll"))},"무한 스크롤")]),"table"===a.viewMode?((0,o.uX)(),(0,o.CE)("div",ee,[(0,o.Lk)("table",null,[t[5]||(t[5]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"포스터"),(0,o.Lk)("th",null,"영화 제목"),(0,o.Lk)("th",null,"평점"),(0,o.Lk)("th",null,"개봉일")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.paginatedMovies,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"Movie Poster"},null,8,te)]),(0,o.Lk)("td",null,(0,b.v_)(e.title),1),(0,o.Lk)("td",null,(0,b.v_)(e.vote_average),1),(0,o.Lk)("td",null,(0,b.v_)(e.release_date),1)])))),128)),a.paginatedMovies.length?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("tr",se,t[4]||(t[4]=[(0,o.Lk)("td",{colspan:"4"},"영화 데이터가 없습니다.",-1)])))])]),(0,o.Lk)("div",ie,[(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.previousPage&&l.previousPage(...e)),disabled:1===a.currentPage},"이전",8,oe),(0,o.Lk)("span",null,"페이지 "+(0,b.v_)(a.currentPage),1),(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>l.nextPage&&l.nextPage(...e)),disabled:a.currentPage===a.totalPages},"다음",8,ae)])])):(0,o.Q3)("",!0),"scroll"===a.viewMode?((0,o.uX)(),(0,o.CE)("div",le,[(0,o.Lk)("div",ne,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.movies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"Movie Poster"},null,8,re),(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("p",null,"평점: "+(0,b.v_)(e.vote_average),1),(0,o.Lk)("p",null,"개봉일: "+(0,b.v_)(e.release_date),1)])))),128))]),a.loading?((0,o.uX)(),(0,o.CE)("div",ue,"로딩 중...")):(0,o.Q3)("",!0),a.loading||0!==a.movies.length?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",ce," 대세 콘텐츠를 찾을 수 없습니다. "))])):(0,o.Q3)("",!0)])])}s(4520);var he={components:{AppHeader:K},data(){return{movies:[],paginatedMovies:[],viewMode:"table",currentPage:1,totalPages:1,itemsPerPage:10,loading:!1}},methods:{async fetchPopularMovies(e=1){if(this.loading)return;const t="82313e915c2066d13bffefeeb13b1d31",s=`https://api.themoviedb.org/3/movie/popular?api_key=${t}&language=ko-KR&page=${e}`;this.loading=!0;try{const e=await fetch(s),t=await e.json();if(t.results){const e=t.results.filter((e=>!this.movies.some((t=>t.id===e.id))));this.movies=[...this.movies,...e],this.totalPages=t.total_pages,this.updatePaginatedMovies()}}catch(i){console.error("영화 데이터를 가져오는 중 오류 발생:",i),alert("영화 데이터를 불러오는 중 문제가 발생했습니다.")}finally{this.loading=!1}},updatePaginatedMovies(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;this.paginatedMovies=this.movies.slice(e,t)},nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.updatePaginatedMovies())},previousPage(){this.currentPage>1&&(this.currentPage--,this.updatePaginatedMovies())},handleScroll(){const e=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-50;e&&"scroll"===this.viewMode&&!this.loading&&this.fetchPopularMovies(this.currentPage+1)},updateViewMode(e){this.viewMode=e}},created(){this.fetchPopularMovies()},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const pe=(0,r.A)(he,[["render",de],["__scopeId","data-v-1fb52558"]]);var ve=pe;const ge={class:"search-page"},me={class:"search-container"},ke={class:"search-bar"},fe={class:"filter-options"},be=["value"],we={key:0,class:"movies"},Le=["src"],ye={key:1};function _e(e,t,s,a,l,n){const r=(0,o.g2)("AppHeader");return(0,o.uX)(),(0,o.CE)("div",ge,[(0,o.bF)(r),(0,o.Lk)("div",me,[t[13]||(t[13]=(0,o.Lk)("h2",{class:"page-title"},"찾아보기",-1)),(0,o.Lk)("div",ke,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.query=e),onKeyup:t[1]||(t[1]=(0,i.jR)(((...e)=>n.searchMovies&&n.searchMovies(...e)),["enter"])),type:"text",placeholder:"영화 제목을 입력하세요..."},null,544),[[i.Jo,l.query]]),(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>n.searchMovies&&n.searchMovies(...e))},"검색")]),(0,o.Lk)("div",fe,[(0,o.Lk)("label",null,[t[10]||(t[10]=(0,o.eW)(" 장르: ")),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.selectedGenre=e),onChange:t[4]||(t[4]=(...e)=>n.filterMovies&&n.filterMovies(...e))},[t[9]||(t[9]=(0,o.Lk)("option",{value:""},"전체",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.genres,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,b.v_)(e.name),9,be)))),128))],544),[[i.u1,l.selectedGenre]])]),(0,o.Lk)("label",null,[t[11]||(t[11]=(0,o.eW)(" 평점: ")),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>l.minRating=e),onInput:t[6]||(t[6]=(...e)=>n.filterMovies&&n.filterMovies(...e)),placeholder:"최소 평점"},null,544),[[i.Jo,l.minRating]])]),(0,o.Lk)("label",null,[t[12]||(t[12]=(0,o.eW)(" 개봉 연도: ")),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>l.releaseYear=e),onInput:t[8]||(t[8]=(...e)=>n.filterMovies&&n.filterMovies(...e)),placeholder:"연도"},null,544),[[i.Jo,l.releaseYear]])])]),l.filteredMovies.length?((0,o.uX)(),(0,o.CE)("div",we,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.filteredMovies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"Movie Poster"},null,8,Le),(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("p",null,"평점: "+(0,b.v_)(e.vote_average),1),(0,o.Lk)("p",null,"개봉: "+(0,b.v_)(e.release_date),1)])))),128))])):((0,o.uX)(),(0,o.CE)("p",ye,"검색 결과가 없습니다."))])])}var Me={components:{AppHeader:K},data(){return{query:"",genres:[],selectedGenre:"",minRating:"",releaseYear:"",movies:[],filteredMovies:[]}},methods:{async fetchGenres(){try{const e="82313e915c2066d13bffefeeb13b1d31",t=`https://api.themoviedb.org/3/genre/movie/list?api_key=${e}&language=ko-KR`,s=await fetch(t),i=await s.json();this.genres=i.genres}catch(e){console.error("장르 데이터를 가져오는 중 오류 발생:",e),this.genres=[]}},async searchMovies(){const e="82313e915c2066d13bffefeeb13b1d31",t=`https://api.themoviedb.org/3/search/movie?api_key=${e}&language=ko-KR&query=${this.query}`,s=await fetch(t),i=await s.json();this.movies=i.results,this.filteredMovies=this.movies},filterMovies(){this.filteredMovies=this.movies.filter((e=>{const t=""===this.selectedGenre||e.genre_ids.includes(Number(this.selectedGenre)),s=""===this.minRating||e.vote_average>=Number(this.minRating),i=""===this.releaseYear||e.release_date?.startsWith(this.releaseYear);return t&&s&&i}))}},created(){this.fetchGenres()}};const Ce=(0,r.A)(Me,[["render",_e],["__scopeId","data-v-595b799c"]]);var Ee=Ce;const Pe={class:"wishlist-page"},Xe={key:0,class:"movies"},We=["src"],Ie=["onClick"],Ae={key:1};function Se(e,t,s,i,a,l){const n=(0,o.g2)("AppHeader");return(0,o.uX)(),(0,o.CE)("div",Pe,[(0,o.bF)(n),t[1]||(t[1]=(0,o.Lk)("h2",{class:"page-title"},"내가 찜한 리스트",-1)),a.wishlist.length?((0,o.uX)(),(0,o.CE)("div",Xe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.wishlist,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"Movie Poster"},null,8,We),(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("button",{onClick:t=>l.removeFromWishlist(e)},"Remove",8,Ie)])))),128))])):((0,o.uX)(),(0,o.CE)("div",Ae,t[0]||(t[0]=[(0,o.Lk)("p",null,"찜한 영화가 없습니다.",-1)])))])}var De={components:{AppHeader:K},data(){return{wishlist:[]}},methods:{loadWishlist(){const e=localStorage.getItem("movieWishlist");this.wishlist=e?JSON.parse(e):[]},removeFromWishlist(e){this.wishlist=this.wishlist.filter((t=>t.id!==e.id)),localStorage.setItem("movieWishlist",JSON.stringify(this.wishlist))}},created(){this.loadWishlist()}};const Fe=(0,r.A)(De,[["render",Se],["__scopeId","data-v-175d076b"]]);var $e=Fe;s(1454);const Ve={key:0,class:"movie-details"},Re=["src"];function qe(e,t,s,i,a,l){return a.movie?((0,o.uX)(),(0,o.CE)("div",Ve,[(0,o.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+a.movie.poster_path,alt:"Movie Poster"},null,8,Re),(0,o.Lk)("h2",null,(0,b.v_)(a.movie.title),1),(0,o.Lk)("p",null,(0,b.v_)(a.movie.overview),1),(0,o.Lk)("p",null,"Rating: "+(0,b.v_)(a.movie.vote_average),1),(0,o.Lk)("p",null,"Release Date: "+(0,b.v_)(a.movie.release_date),1),(0,o.Lk)("p",null,"Genres: "+(0,b.v_)(a.movie.genres.map((e=>e.name)).join(", ")),1)])):(0,o.Q3)("",!0)}var Oe={data(){return{movie:null}},methods:{async fetchMovieDetails(){const e="82313e915c2066d13bffefeeb13b1d31",t=this.$route.params.id,s=`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=ko-KR`;try{const e=await fetch(s);this.movie=await e.json()}catch(i){console.error("Error fetching movie details:",i)}}},created(){this.fetchMovieDetails()}};const Ke=(0,r.A)(Oe,[["render",qe],["__scopeId","data-v-7547e48e"]]);var je=Ke;const Je=[{path:"/",component:f},{path:"/dashboard",component:N,meta:{requiresAuth:!0}},{path:"/popular",component:ve,meta:{requiresAuth:!0}},{path:"/search",component:Ee,meta:{requiresAuth:!0}},{path:"/wishlist",component:$e,meta:{requiresAuth:!0}},{path:"/movie/:id",component:je,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Y}],xe=(0,d.aE)({history:(0,d.Bt)(),routes:Je});xe.beforeEach(((e,t,s)=>{const i=!!localStorage.getItem("authToken");e.meta.requiresAuth&&!i?s("/auth"):"/auth"===e.path&&i?s("/"):s()}));var He=xe,Ne=s(7411);const Ue=(0,i.Ef)(c);Ue.use(Ne.Ay,{timeout:5e3,position:"top-right"}),Ue.use(He),Ue.mount("#app")}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,i,o,a){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],a=e[c][2];for(var n=!0,r=0;r<i.length;r++)(!1&a||l>=a)&&Object.keys(s.O).every((function(e){return s.O[e](i[r])}))?i.splice(r--,1):(n=!1,a<l&&(l=a));if(n){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,o,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,l=i[0],n=i[1],r=i[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in n)s.o(n,o)&&(s.m[o]=n[o]);if(r)var c=r(s)}for(t&&t(i);u<l.length;u++)a=l[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},i=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(7598)}));i=s.O(i)})();
//# sourceMappingURL=app.6b4750e5.js.map