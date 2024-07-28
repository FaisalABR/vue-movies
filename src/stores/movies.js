import { ref } from 'vue'
import { defineStore } from 'pinia'
import { callAPI, callCreditsAPI, callDetailAPI, callVideoAPI } from '@/api'

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
  const detailMovie = ref(null)
  const credits = ref(null)
  const video = ref(null)
  const selectedPoster = ref(null)

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
      console.log(response.results)
    } catch (e) {
      return e
    }
  }

  const fetchDetailMovie = async (endpoint, id) => {
    detailMovie.value = null
    try {
      const response = await callDetailAPI(endpoint, id)
      detailMovie.value = response
    } catch (e) {
      return e
    }
  }

  const fetchCredits = async (endpoint, id) => {
    credits.value = null
    try {
      const response = await callCreditsAPI(endpoint, id)
      const data = await response.cast
      credits.value = data.slice(0, 8)
      console.log(credits.value)
    } catch (e) {
      return e
    }
  }

  const fetchVideos = async (endpoint, id) => {
    video.value = null
    try {
      const response = await callVideoAPI(endpoint, id)

      video.value = await response.results[0].key
      console.log(video.value)
    } catch (e) {
      return e
    }
  }

  return {
    heroMovies,
    movies,
    isTrailerOpen,
    fetchMovies,
    detailMovie,
    fetchMoviesMore,
    moviesPage,
    tvPage,
    fetchTvMore,
    fetchDetailMovie,
    credits,
    fetchCredits,
    video,
    fetchVideos,
    selectedPoster
  }
})
