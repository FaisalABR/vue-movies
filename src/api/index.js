const apiKey = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const callAPI = async (category, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/${category}?language=en-US&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })

    return response.json()
  } catch (error) {
    return error
  }
}

export const callDetailAPI = async (category, id) => {
  try {
    const response = await fetch(`${BASE_URL}/${category}/${id}?language=en-US`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })

    return response.json()
  } catch (error) {
    return error
  }
}

export const callCreditsAPI = async (category, id) => {
  try {
    const response = await fetch(`${BASE_URL}/${category}/${id}/credits?language=en-US`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })

    return response.json()
  } catch (error) {
    return error
  }
}

export const callVideoAPI = async (category, id) => {
  try {
    const response = await fetch(`${BASE_URL}/${category}/${id}/videos?language=en-US`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })

    return response.json()
  } catch (error) {
    return error
  }
}
