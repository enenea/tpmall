import axios from 'axios'


export function request(config){

		// 1 初始化axios
	const instance = axios.create({
		baseURL:'http://www.tp6.com/shop.php/',
		timeout:5000,
	})


	// 2 设置拦截器
	// 请求成功拦截器需要在方法内返回config配置否则请求失败
	instance.interceptors.request.use( config => {
		// console.log(config);
		return config

		// 使用场景
		// 1携带一些header信息
		// 2show请求中的图片
		// 3在进行一些操作的时候带上token，如登录，没有token则跳转登录

	}, err =>{
		console.log(err);
	})

	// 返回成功需要在成功方法内返回res数据出去否则请求失败
	instance.interceptors.response.use( res => {
		// console.log(res);
		return res.data
	}, err =>{
		console.log(err);
	})


	// 返回
	return instance(config)
}
