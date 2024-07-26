<template>
  <div class="flex flex-col group w-[170px]">
    <div class="flex flex-col rounded-lg w-full h-[220px] bg-white relative cursor-pointer">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + poster"
        class="absolute top-0 bottom-0 z-0 left-0 right-0 w-full h-full rounded-lg object-cover object-center"
      />
      <div
        class="absolute w-full h-full hidden group-hover:flex items-center justify-center bg-black/40 transition-all duration-200"
      >
        <div
          @click="openTrailer"
          class="bg-red-600 rounded-full px-4 py-1 text-white scale-0 group-hover:scale-100 duration-1000 transition-all"
        >
          Play
        </div>
      </div>
    </div>
    <RouterLink :to="'/details/' + movieId">
      <p
        class="text-sm cursor-pointer text-white mt-2 font-medium group-hover:text-[#E50914] line-clamp-1"
      >
        {{ title }}
      </p>
    </RouterLink>
  </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps(['poster', 'title', 'movieId'])
const { poster, title, movieId } = props
console.log(movieId)
const store = useMoviesStore()

const { isTrailerOpen } = storeToRefs(store)

const openTrailer = () => {
  isTrailerOpen.value = true
}
</script>
