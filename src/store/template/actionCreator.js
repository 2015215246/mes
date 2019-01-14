import * as type from './type'

const actionCreator = {
    templateFun(){
        let action ={
            type : type.TEMPLATE
        }
        return action
    },
    templateFun1(payload){
        let action ={
            type : type.TEMPLATE,
            payload
        }
        return action
    }
}

export default actionCreator