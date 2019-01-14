import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getList(){
        return dispatch =>{
            axios
            .get('/jmyp/product',{
                params: {
                    shop_id: 1,
                    category_id: 2,
                    page: 1,
                    page_size : 8
                }
            })
            .then(res => {
                let action = {                  
                    type : type.GET_LIST,
                    // payload:'aaa',
                    payload : res.data.data.data
                }
                dispatch(action)
            })
            .catch(error => console.log(error))
        }
    }
    
}

export default actionCreator