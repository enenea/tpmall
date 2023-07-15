import {request} from "./request.js"

export function getMultiData(){
  return request({
    url:"/home",
    method:"post",
  })
}


export function getGoodsData(id){
  return request({
    url:"/home/getgoods",
    data:{
      id
    },
    method:"post",
  })
}






