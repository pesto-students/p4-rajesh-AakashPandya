import { API_URLS } from 'common/constants'
import { AxiosResponse } from 'axios'
import { IShortenURLSuccessResponse } from 'interfaces/IShortenURLSuccessResponse'
import baseService from './baseService'

const shortenURL = async (
  url: string
): Promise<AxiosResponse<IShortenURLSuccessResponse>> => {
  const response = await baseService.get(`${API_URLS.SHORTEN}${url}`)
  console.log(response)
  return response
}

const getDetails = () => {}

export default {
  shortenURL,
  getDetails,
}
