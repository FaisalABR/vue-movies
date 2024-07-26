<template>
  <nav class="fixed z-50 top-0 left-0 right-0 py-3 bg-transparent">
    <div class="flex items-center justify-between w-[90%] lg:max-w-[1220px] mx-auto">
      <RouterLink to="/">
        <img src="/netflix_icon.png" alt="netflix logo" class="w-16 object-cover" />
      </RouterLink>

      <div class="flex items-center gap-16">
        <RouterLink to="/" class="text-white">Home</RouterLink>
        <RouterLink to="/movies" class="text-white">Movie</RouterLink>
        <RouterLink to="/tv" class="text-white">TV</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
