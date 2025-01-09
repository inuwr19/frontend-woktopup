import axiosLib from 'axios'
import Cookies from 'js-cookie'

const axiosTest = axiosLib.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
})

axiosTest.defaults.withCredentials  = true // allow sending cookies

axiosTest.interceptors.request.use(async (config) => {
  if ((config.method as string).toLowerCase() !== 'get') {
    await axiosTest.get('/csrf-cookie').then()
    config.headers['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')
  }

  return config
})

export default axiosTest