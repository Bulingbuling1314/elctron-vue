import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: '', // api的base_url
  withCredentials: true,
  timeout: 300000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(result => {
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
    return result.data
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)
export default service
