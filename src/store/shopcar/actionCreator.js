import * as type from './type'

const actionCreator = {
    addCar(goodInfo,success,fail){
        return dispatch =>{ 
            setTimeout(()=>{
                let action = {
                    type: type.ADD_CAR,
                    payload : goodInfo
                }
                dispatch(action)
                if(success) success()
                return false
            },100)
        }
    },
    minusCar(goodId,success,fail){
        return dispatch =>{ 
            setTimeout(()=>{
                let action = {
                    type: type.MINUS_CAR,
                    payload : goodId
                }
                dispatch(action)
                if(success) success()
                return false
            },100)
        }
    }
}


export default actionCreator