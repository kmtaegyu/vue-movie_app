<template>
    <div class="movie-details" v-if="movie">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt="Movie Poster"
      />
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <p>Rating: {{ movie.vote_average }}</p>
      <p>Release Date: {{ movie.release_date }}</p>
      <p>Genres: {{ movie.genres.map((g) => g.name).join(", ") }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movie: null,
      };
    },
    methods: {
      async fetchMovieDetails() {
        const apiKey = process.env.VUE_APP_TMDB_API_KEY;
        const movieId = this.$route.params.id;
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR`;
  
        try {
          const response = await fetch(url);
          this.movie = await response.json();
        } catch (error) {
          console.error("Error fetching movie details:", error);
          
        }
      },
    },
    created() {
      this.fetchMovieDetails();
    },
  };
  </script>
  
  <style scoped>
  .movie-details img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
  </style>
  