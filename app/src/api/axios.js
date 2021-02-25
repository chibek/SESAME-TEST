import axios from 'axios'
const token = import.meta.env.VITE_TOKEN
axios.defaults.headers.common = {
  'Authorization': `bearer ${token}`
}
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const axiosInstance = axios.create({
  baseURL:   import.meta.env.VITE_REACT_APP_AXIOS_ENDPOINT,
})

export { axiosInstance }