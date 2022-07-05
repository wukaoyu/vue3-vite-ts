import Axios from "axios";

let baseUrl:string
if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
}else if  (process.env.NODE_ENV === 'production') {
  baseUrl = '/api'
}

Axios.defaults.timeout = 500000
Axios.defaults.baseURL = ""
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export const request = (options: { data: any; url: string; method: string; }) => {
  const { data, url, method } = options
  return new Promise((resolve, reject) => {
    if (method === 'POST') {
      Axios.post(baseUrl + url, data).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    } 
    if (method === 'GET') {
      Axios.get(baseUrl + url, {params: data}).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    }
  })
}
