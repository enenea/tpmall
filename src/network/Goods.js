import {request} from "./request.js"

export function getGoodsDetail(params){
  return request({
    url:"/goods/detail",
    data:{
      id: params.id,
    },
    method:"post",
  })
}






