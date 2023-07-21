import {request} from "./request.js"

export function getMultiData(){
  return request({
    url:"/home",
    method:"post",
  })
}


export function getGoodsData(params){
  return request({
    url:"/home/getgoods",
    data:{
      id: params.id,
      page: params.page
    },
    method:"post",
  })
}






