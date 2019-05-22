import axios from 'axios'

const API_URL = "http://65a1636c.ngrok.io"

axios.defaults.baseURL = API_URL;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(request => {
    console.log("axios request\n\n", request)
    return request
})
  
axios.interceptors.response.use(response => {
    console.log("axios response\n\n", response)
    return response
})

export default axios;