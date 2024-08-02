import axios from 'axios'
import { env } from 'configs'

function axiosClient() {
  const axiosClient = axios.create({
    baseURL: env.REACT_APP_API_BASE_URL,
  })

  return axiosClient
}

export const api = axiosClient()
