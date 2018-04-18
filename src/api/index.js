/**
 * Created by 马晓莹 on 2018/4/17.
 */
/*
* 包含n个借口请求函数的模块
* */
import ajax from './ajax'
// ## 目录：
// [1、获取E宠主页广告列表](##获取E宠主页广告列表)<br/>
export const reqHomepage = () => ajax('/api/index')
// [2、获取E宠分类列表](#获取E宠分类列表)<br/>
export const reqClassifys=() =>ajax('/api/classify')
// [3、获取E宠品牌列表](#获取E宠品牌列表)<br/>
export const reqBrand = ()=> ajax('/api/brand')
// [4、获取轮播图广告和每日疯抢](#获取轮播图广告和每日疯抢)<br/>
export const reqDailySale=()=>ajax('/api/carousel')
// [5、获取一次性验证码](#4获取一次性验证码)<br/>
export const reqCaptcha=()=>ajax('/api/captcha')
// [6、用户名密码登陆](#4用户名密码登陆)<br/>
export const loginPwd=({name,pwd,capcha})=>ajax('/api/login_pwd',{name,pwd,capcha},'POST')
// [7、发送短信验证码](#5发送短信验证码)<br/>
export const sendCode=({phone,code})=>ajax('/api/sendcode',{phone,code},'POST')
// [8、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const loginSms=({phone,code})=>ajax('/api/login_sms',{phone,code},'POST')
// [9、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export const reqUserInfo=()=>ajax('/api/userinfo')
//[10、E宠品牌全部数据](#E宠品牌全部数据)<br/>
export const reqAllBrand=()=>ajax('/api/allbrand')
