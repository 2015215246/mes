
import actionCreator from '../../store/detail/actionCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupDetail = connect(state => state.detail,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default GroupDetail