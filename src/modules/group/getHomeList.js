
import actionCreator from '../../store/homeList/actionCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupHomeList = connect(state => state.homelist,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default GroupHomeList