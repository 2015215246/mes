
import actionCreator from '../../store/shopcar/actionCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupCars = connect(state => state.cars,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default GroupCars