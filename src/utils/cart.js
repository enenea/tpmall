import Cookie from "js-cookie"

const ShopCartKey = "shopcart"


// 价格
export function getTotalPrice() {
  return Cookies.get(ShopCartKey)
}

// goods 添加购物车的时候组装一个数组传递进来
// 前端存储近vuex以及cookie中
// 后续在购物车增加防抖功能(后续确认是否需要防抖)把购物车的商品提交到后台
// 后台使用redis存储购物车数据
// 数据保存起来用于购物车数据多端同一
export function setTotalPrice(goods) {
  return Cookies.set(ShopCartKey, goods)
}

export function removeTotalPrice() {
  return Cookies.remove(ShopCartKey)
}
