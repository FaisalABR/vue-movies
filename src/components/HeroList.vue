<template>
  <swiper
    :key="1"
    :modules="[Autoplay]"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="movie in store.heroMovies" :key="movie.id">
      <div class="w-full h-screen relative flex items-center justify-center">
        <img
          :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
          class="w-full z-0 absolute h-full object-cover"
        />
        <div
          class="absolute z-0 bottom-0 h-full w-full bg-gradient-to-t from-black via-black/10 from-5% via-100%"
        />
        <div class="w-[90%] lg:max-w-[1220px] relative z-10 h-full flex items-center">
          <div class="w-full flex items-center justify-between">
            <div class="w-6/12 flex flex-col gap-4">
              <h2 class="text-white capitalize text-6xl font-semibold">
                {{ movie.original_title }}
              </h2>
              <div class="flex items-center gap-3 mx-2">
                <p class="text-lg text-white font-medium">{{ takeYear(movie.release_date) }}</p>
                <span class="bg-white size-2 rounded-full"></span>
                <p class="text-lg text-white font-medium">Comedy</p>
                <span class="bg-white size-2 rounded-full"></span>
                <p class="text-lg text-white font-medium">Action</p>
              </div>

              <p class="text-white text-lg">
                {{ movie.overview }}
              </p>

              <div class="flex items-center gap-3">
                <button
                  class="text-xl font-medium text-white shadow-md shadow-red-500 bg-red-600 rounded-full px-4 py-2"
                >
                  Watch Now
                </button>
                <button
                  class="text-xl font-medium text-white shadow-lg border-2 border-white rounded-full px-4 py-2"
                >
                  Watch Trailer
                </button>
              </div>
            </div>
            <div class="w-6/12 flex items-center justify-center">
              <img
                :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                :alt="'poster' + movie.original_title"
                class="w-80 object-cover rounded-xl shadow-md shadow-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { useMoviesStore } from '@/stores/movies'
import { onMounted } from 'vue'

const store = useMoviesStore()

const takeYear = (date) => {
  return date.split('-')[0]
}

onMounted(() => {
  store.fetchMovies('movie/now_playing')
})
</script>

<style></style>
