<template>
  <div class="w-full relative flex items-center h-screen">
    <img
      :src="
        'https://image.tmdb.org/t/p/original' + detailMovie?.belongs_to_collection.backdrop_path
      "
      alt="Despicable me"
      class="w-full h-screen absolute top-0 object-cover"
    />
    <div
      class="absolute top-0 w-full h-screen bg-gradient-to-t from-black via-black/70 to-black/20 from-35% via-80% to-100%"
    />
    <div class="w-[90%] lg:max-w-[1220px] mx-auto flex justify-center relative z-30">
      <div class="w-5/12 flex justify-center">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + detailMovie?.poster_path"
          alt="Poster"
          class="w-72 rounded-md object-cover"
        />
      </div>
      <div class="w-7/12 flex flex-col items-start">
        <h2 class="text-4xl font-bold text-white">{{ detailMovie?.original_title }}</h2>
        <div class="flex items-center gap-3 my-5">
          <span class="px-5 text-white font-medium text-lg">2024</span>
          <span
            class="text-white font-medium text-lg px-5 py-1 border rounded-full hover:bg-white/50 transition-all"
            v-for="genre in detailMovie?.genres"
            :key="genre.id"
            >{{ genre.name }}</span
          >
        </div>
        <p class="text-white font-medium text-sm my-5">
          {{ detailMovie?.overview }}
        </p>
        <div class="flex flex-col gap-3 w-full">
          <h3 class="text-white text-xl font-semibold">Casts</h3>
          <div class="w-full grid grid-cols-4 mt-3">
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <img src="" class="bg-red-500 size-20 rounded-full object-cover" />
              <span class="text-white">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/movies'
// import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useMoviesStore()
const { fetchDetailMovie, detailMovie } = store

onMounted(() => {
  fetchDetailMovie('movie', 1022789)
})

console.log(detailMovie)
</script>
