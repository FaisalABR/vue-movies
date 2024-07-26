<template>
  <div class="w-full bg-black relative">
    <div class="w-[90%] lg:max-w-[1220px] mx-auto pt-24">
      <h2 class="text-4xl font-semibold my-2 text-white">Tv Show</h2>
      <div class="w-full flex items-center gap-5">
        <input
          type="text"
          class="bg-gray-800 rounded-xl px-2 py-1 w-60"
          placeholder="Search movie"
        />
      </div>
      <div class="w-full flex flex-wrap gap-5 my-10">
        <MovieCard
          v-for="movie in store.tvPage"
          :key="movie.id"
          :poster="movie.poster_path"
          :title="movie.original_title"
        />
      </div>
    </div>
    <div
      class="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black via-black/30 to-transparent from-70% via-95% to-100% flex items-center justify-center"
    >
      <button @click="handleViewMore" class="bg-red-600 text-white px-2 py-1">Views More</button>
    </div>
  </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/movies'
import { onMounted, ref } from 'vue'
import MovieCard from '../components/MovieCard.vue'

const page = ref(1)
const store = useMoviesStore()

const handleViewMore = () => {
  page.value++
  store.fetchTvMore('tv/popular', page.value)
}

onMounted(() => {
  store.fetchTvMore('tv/popular', page.value)
})
</script>
