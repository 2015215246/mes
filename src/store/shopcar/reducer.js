import state from './state'
import * as type from './type'

const reducer = (previousState = state,action) => {
    let new_state = {...previousState}
    switch(action.type){
        case type.ADD_CAR:
                new_state.cars = handler.addCar(new_state.cars,action.payload)
                localStorage.setItem('cars',JSON.stringify(new_state.cars))
            break;
        case type.MINUS_CAR:
            new_state.cars = handler.minusCar(new_state.cars,action.payload)
            localStorage.setItem('cars',JSON.stringify(new_state.cars))
        break;
        default:
            break;
    }

    return new_state
}

let handler = {
    addCar(cars,goodInfo){
        let _cars = cars.slice()
        let isHas = _cars.some((item) => {
            if(item.id === goodInfo.id){
                item.num += goodInfo.num
                return true
            }
            return false
        })
        if (!isHas){
            _cars.push(goodInfo)
        }
        return _cars
    },
    minusCar(cars,goodId){
        let _cars = cars.slice()
        _cars.forEach((item,index) => {
            if(item.id === goodId){
                item.num--
                if(item.num === 0 ){
                    _cars.splice(index,1)
                }
                return true
            }
            return true
        })
        return _cars
    }
}

export default reducer