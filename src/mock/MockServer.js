
import Mock from 'mockjs'

import data from './data.json'


Mock.mock('/classafiy/sort', {code: 0, data: data.categorys})  // {code: 0, data: goods数据}

Mock.mock('/classafiy/brand', {code: 0, data: data.brand})  // {code: 0, data: ratings数据}

Mock.mock('/homepage', {code: 0, data: data.homepage})

Mock.mock('/allbrands', {code: 0, data: data.allbrands})

// export default ???  没有需要暴露的东西
