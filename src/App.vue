<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import DialogTrailer from './components/DialogTrailer.vue'
import { useMoviesStore } from '@/stores/movies'

const store = useMoviesStore()
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <DialogTrailer v-if="store.isTrailerOpen" />
</template>

<style scoped></style>
