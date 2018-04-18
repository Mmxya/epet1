/**
 * Created by 马晓莹 on 2018/4/15.
 */
import Vue from 'vue'
import {
  RECEIVE_HOMEPAGE,
  RECEIVE_BRANDS,
  RECEIVE_CLASSIFYS,
  RECEIVE_ALLBRAND,
  RECEIVE_LUNBOTU
} from './mutation-types'

export default {
  [RECEIVE_HOMEPAGE](state,{homepage}){
    state.homepage = homepage
  },
  [RECEIVE_CLASSIFYS](state,{classifys}){//所有分类列表
    state.classifys=classifys
  },
  [RECEIVE_ALLBRAND](state,{allbrand}){//接收所有品牌数据
    state.allbrand = allbrand
  },
  [RECEIVE_BRANDS](state,{brands}){
    state.brands = brands
  },
  [RECEIVE_LUNBOTU](state,{lunbotu}){
    state.lunbotu = lunbotu
  }
}
