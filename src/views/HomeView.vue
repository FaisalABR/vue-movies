<script setup>
import MovieList from '../components/MovieList.vue'
import HeroList from '../components/HeroList.vue'
</script>

<template>
  <main class="bg-black">
    <HeroList />
    <div class="w-[90%] lg:max-w-[1220px] mx-auto">
      <MovieList title="Popular" endpoint="movie/popular" />
      <MovieList title="Top Rated" endpoint="movie/top_rated" />
      <MovieList title="Upcoming" endpoint="movie/upcoming" />
      <h1 class="text-white">This is home page</h1>
    </div>
  </main>
</template>
