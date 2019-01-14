
import actionCreator from '../../store/regNumber/actionCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const getRegNumber = connect(state => state.regNumber,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default getRegNumber