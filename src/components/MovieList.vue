<template>
  <div class="w-full my-16">
    <div class="flex items-center justify-between">
      <h3 class="text-white font-semibold text-2xl">{{ title }}</h3>
      <RouterLink to="/movies" class="bg-[#E50914] px-3 py-2 text-white text-sm rounded-lg">
        <p>View More</p></RouterLink
      >
    </div>
    <div class="w-full mt-5">
      <swiper
        slides-per-view="auto"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="movie in movies[categories]" :key="movie.id">
          <MovieCard
            :poster="movie.poster_path"
            :title="movie.original_title"
            :movieId="movie.id"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import MovieCard from './MovieCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useMoviesStore } from '../stores/movies'

const { movies, fetchMovies } = useMoviesStore()

const { title, endpoint } = defineProps(['title', 'endpoint'])
const categories = endpoint.split('/')[1]

onMounted(() => {
  fetchMovies(endpoint)
})
console.log(movies)
</script>

<style scoped>
.swiper-slide {
  width: fit-content;
}
</style>
