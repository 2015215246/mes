import * as type from './type'

const actionCreator = {
    getregnumber(userobj){
       return dispatch => {
            let action ={
                type : type.REG_NUMBER,
                payload: userobj
            }
            dispatch(action)
            // if(success) success()
            // return false
       }
   },
   getUserName(username){
        return dispatch => {
            let action = {
                type:type.CHANGE_USERINFO,
                username
            }
            dispatch(action)
        }
   },
   //判断登录
   login({username,password,success,fail}){
    return dispatch =>{
        let user = getUser()

        setTimeout(()=>{
            let f = user.some((item)=>{
                if(username === item.username && password === item.password){
                    let action ={
                        type: type.CHANGE_USERINFO,
                        username : username
                    }
                    dispatch(action)
                    if(success) success()
                    localStorage.setItem('username',username)
                    return true
                }
            })
            console.log(f);
            if(!f){
                if(fail) fail()
            }  
        },1000)
    }
    }
}
function getUser(){
    return JSON.parse(localStorage.user ? localStorage.user: '[]')
}

export default actionCreator