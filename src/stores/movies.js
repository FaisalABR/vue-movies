import { ref } from 'vue'
import { defineStore } from 'pinia'
import { callAPI, callDetailAPI } from '@/api'

export const useMoviesStore = defineStore('movie', () => {
  const heroMovies = ref([])
  const movies = ref({
    popular: [],
    top_rated: [],
    upcoming: []
  })
  const moviesPage = ref([])
  const tvPage = ref([])
  const error = ref(null)
  const isTrailerOpen = ref(false)
  const detailMovie = ref({})

  const fetchMovies = async (endpoint) => {
    const [, category] = endpoint.split('/')
    try {
      const response = await callAPI(endpoint)
      switch (category) {
        case 'popular':
          movies.value.popular = response.results
          break
        case 'now_playing':
          heroMovies.value = response.results
          break
        case 'top_rated':
          movies.value.top_rated = response.results
          break
        case 'upcoming':
          movies.value.upcoming = response.results
          break
        default:
          break
      }
    } catch (e) {
      error.value = e
    }
  }

  const fetchMoviesMore = async (endpoint, page) => {
    try {
      const response = await callAPI(endpoint, page)
      // moviesPage.value.push(response.results)
      if (page === 1) {
        moviesPage.value = response.results
      } else {
        moviesPage.value = [...moviesPage.value, ...response.results]
      }
    } catch (e) {
      return e
    }
  }

  const fetchTvMore = async (endpoint, page) => {
    try {
      const response = await callAPI(endpoint, page)
      if (page === 1) {
        tvPage.value = response.results
      } else {
        tvPage.value = [...tvPage.value, ...response.results]
      }
    } catch (e) {
      return e
    }
  }

  const fetchDetailMovie = async (endpoint, id) => {
    try {
      const response = await callDetailAPI(endpoint, id)
      console.log(response)
      detailMovie.value = response
    } catch (e) {
      return e
    }
  }

  return {
    heroMovies,
    movies,
    isTrailerOpen,
    fetchMovies,
    fetchMoviesMore,
    moviesPage,
    tvPage,
    fetchTvMore,
    fetchDetailMovie,
    detailMovie
  }
})
