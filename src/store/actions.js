/**
 * Created by 马晓莹 on 2018/4/15.
 */
import {
  RECEIVE_CLASSIFYS,
  RECEIVE_BRANDS,
  RECEIVE_HOMEPAGE,
  RECEIVE_LUNBOTU,
  RECEIVE_ALLBRAND
} from './mutation-types'

import {
  reqHomepage,
  reqClassifys,
  reqDailySale,
  reqBrand,
  reqAllBrand,
} from '../api'

export default {
//异步获取homepage
  async getHomepage({commit},cb){
    const result = await reqHomepage()
    if (result.code === 0){
      const homepage=result.data
      console.log(homepage.datas[0].content_images)
      commit(RECEIVE_HOMEPAGE,{homepage})
    }
  },
  //异步获取轮播图
  async getLunbotu({commit}){
    const result=await reqDailySale()
    if(result.code === 0){
      const lunbotu=result.data.data
      //console.log()
      commit(RECEIVE_LUNBOTU,{lunbotu})
    }
  },
//异步获取所有品牌数据
  async getAllBrand({commit}){
    const result=await reqAllBrand()
    if (result.code === 0){
      const allbrand=result.data
      console.log(allbrand.brand)
      commit(RECEIVE_ALLBRAND,{allbrand})
    }
  },
//异步获取所有分类
  async getClassifys({commit},cb){
    const result = await reqClassifys()
    if (result.code === 0){
      const classifys=result.data.categorys
      console.log(classifys[0].cate_list[0].list[0].photo)
      commit(RECEIVE_CLASSIFYS,{classifys})
    }
  },
  //RECEIVE_BRAND
  async getBrands({commit},cb){
    const result = await reqBrand()
    if (result.code === 0){
      const brands=result.data
      commit(RECEIVE_BRANDS,{brands})
    }
  }
}
