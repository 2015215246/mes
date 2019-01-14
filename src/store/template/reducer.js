import state from './state'
import * as type from './type'

const reducer = (previousState = state,action) => {
    let new_state = previousState
    switch(action.type){
        case type.TEMPLATE:
                //用户操作
            break;

        default:
            break;
    }

    return new_state
}

export default reducer