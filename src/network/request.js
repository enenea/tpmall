import axios from 'axios'
import store from "@/store"
import {Toast} from "vant"
import router from "@/router"


export function request(config){

		// 1 初始化axios
	const instance = axios.create({
		baseURL:'http://www.tp6.com/shop.php/',
		// baseURL:'http://fangdanguo.site/shop.php/',
		timeout:5000,
	})


	// 2 设置拦截器
	// 请求成功拦截器需要在方法内返回config配置否则请求失败
	instance.interceptors.request.use( config => {

    // do something before request is sent
    // 使用场景
    // 1携带一些header信息
    // 2show请求中的图片
    // 3在进行一些操作的时候带上token，如登录，没有token则跳转登录
    // console.log(store.getters.GET_TOKEN);
    if (store.getters.GET_TOKEN) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['authorization'] = 'Bearer ' + store.getters.GET_TOKEN
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  })
  /*
  20000 成功
  20002 失败 直接返回消息不做其他操作
  20003 token验证失败
  20004 token过期 重新登录
  20005 token失效
  20006 token非法
  20007 token在黑名单中
  */
	// 返回成功需要在成功方法内返回res数据出去否则请求失败
  // 是否正在刷新的标记
  let isRefreshing = false
	instance.interceptors.response.use(
		response => {
		  const res = response.data
		  // if the custom code is not 20000, it is judged as an error.
		  if (res.code !== 20000) {
		    if (res.code === 20002) {

		      Toast(res.msg)

		    } else if (res.code === 20003 || res.code === 20004 || res.code === 20005 || res.code === 20006 || res.code == 20007) {
		      // to re-login

          // 20004token进入最后一次可使用测列表
          if (res.code == 20004) {
            if (isRefreshing) {
              isRefreshing = true
            }
            const token = response.headers.authorization
            // alert(token)
            console.log(token)
            store.dispatch("resetToken", token).then( res =>{

              // 获取当前请求的配置 重新设置token再次发送请求
              const config = response.config
              config.headers['authorization'] = "Bearer " + token
              config.baseURL = "http://www.tp6.com/shop.php/"
              return instance(config)
            }).finally(()=>{
              isRefreshing = false
            })
          }else{
            Toast({
              message:res.msg,
              onClose() {
                store.dispatch('removeToken').then(() => {
                  router.push('/login')
                })
              }
            })
          }


		    } else {
          Toast(res.msg)
		    }
		    return Promise.reject(new Error(res.msg || 'Error'))
		  } else {
		    return res
		  }
		},
		error => {
      Toast(error.message)
		  return Promise.reject(error)
	}, err =>{
	})


	// 返回
	return instance(config)
}
