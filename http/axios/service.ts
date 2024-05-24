import axios from 'axios'

// 设置axios的额外配置
export const service = axios.create({
  baseURL: `${process.env.SERVICE_BASE_URL}/api`,
})
// 拦截请求处理
service.interceptors.request.use(async (params) => {
  // 添加token
  // if (FetcherStore.getState().token && typeof window !== 'undefined') {
  //     params.headers.set('Authorization', `Bearer ${FetcherStore.getState().token}`);
  // }
  return params
})
// 拦截响应处理
service.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    // if (import.meta.env.DEV) console.log('respError', error);
    // if (!isNil(error.response))
    if (!error.response)
      switch (error.response.status) {
        case 401: {
          // 如果响应401就把原本的FetcherStore数据设置为空，好让页面跳至登录页
          // FetcherStore.setState((state) => {
          //     state.token = null;
          // });
          break
        }
        default:
          // globalError(error)
          break
      }
    return Promise.reject(error)
  }
)
