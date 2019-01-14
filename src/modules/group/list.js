
import actionCreator from '../../store/list/actionCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupList = connect(state => state.list,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default GroupList