<template>
  <div
    class="fixed z-50 top-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center"
  >
    <h1 class="px-5 py-4 bg-gray-900 rounded-md w-full max-w-[780px] h-[80vh]">
      <div class="flex items-center justify-between border-b-2 border-red-600 pb-5 mb-5">
        <h2 class="text-white text-2xl font-semibold">Title film</h2>
        <button
          @click="closeTrailer"
          class="bg-red-600 text-white size-10 cursor-pointer rounded-full"
        >
          X
        </button>
      </div>
      <iframe :src="'https://www.youtube.com/embed/' + video" class="w-full h-[calc(100%-100px)]" />
    </h1>
  </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useMoviesStore()

const { isTrailerOpen, selectedPoster, video } = storeToRefs(store)

const closeTrailer = () => {
  isTrailerOpen.value = false
}

console.log(selectedPoster.value)
console.log(isTrailerOpen.value)
console.log(video)

onMounted(() => {
  store.fetchVideos('movie', selectedPoster.value)
})
</script>
