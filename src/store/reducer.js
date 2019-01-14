//真正的统一管理分片的reducer

import { combineReducers } from 'redux';
import template from './template/reducer'
import user from './mineData/reducer'
import homelist from './homeList/reducer'
import regNumber from './regNumber/reducer'
import list from './list/reducer'
import detail from './detail/reducer'
import cars from './shopcar/reducer'

const reducer = combineReducers({
    cars,template,user,homelist,regNumber,list,detail
})

export default reducer
