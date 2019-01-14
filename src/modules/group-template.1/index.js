
import actionCreator from '../../store/template/actionCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupTemplate = connect(state => state.templateData,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default GroupTemplate