import { API_BASE_URL } from 'common/constants'
import axios from 'axios'

const { get, post, interceptors } = axios.create({
  baseURL: API_BASE_URL,
})

interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default {
  get,
  post,
}
