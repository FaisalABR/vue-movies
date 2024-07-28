<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import DialogTrailer from './components/DialogTrailer.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { isTrailerOpen } = storeToRefs(store)
console.log
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <DialogTrailer v-if="isTrailerOpen" />
</template>

<style scoped></style>
