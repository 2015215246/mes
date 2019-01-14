import * as type from './type'

const actionCreator = {
   
    loginByUser(username,password,success,fail){
        let name ="aaa"
        let pass = '123'
        return dispatch =>{
            if(username === name && password === pass){
                let action ={
                    type: type.CHANGE_USERINFO,
                    username : username
                }
                dispatch(action)
                if(success) success()
                return false
            }
            if(fail) fail()
        }
        
    }
}

export default actionCreator