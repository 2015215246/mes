import state from './state'
import * as type from './type'

const reducer = (previousState = state,action) => {
    let new_state = previousState
    switch(action.type){
        //判断注册
        case type.REG_NUMBER:
            let name = getUser();
            let flag = true;
            if(action.payload.username != "" && action.payload.password != ""){
                name.some( user => {
                    if( user.username == action.payload.username){
                        //成立 说明cars里面已经存在这条数据了
                        flag = !flag
                        return
                    } 
                }) 
                if(flag){
                    name.push(action.payload)
                    localStorage.user = JSON.stringify(name)
                    alert("注册成功")
                }else{
                    alert("用户名已被注册")
                }
            }else{
                alert("用户名或密码不能为空")
            }  
        break;
        case type.CHANGE_USERINFO:
            new_state.userInfo = {
                username: action.username
            }
        break;
        default:
            break;
    }

    return new_state
}

function getUser(){
    return JSON.parse(localStorage.user ? localStorage.user: '[]')
}

export default reducer