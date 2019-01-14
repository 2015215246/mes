import state from './state'
import * as type from './type'

const reducer = (previousState = state,action) => {
    let new_state = {...previousState}

    switch(action.type){
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

export default reducer