import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getDetail(id){
        return dispatch =>{
            let url = `/jmyp/product/${id}/1`
        axios
            .get(
                url
            )
            .then(
                res => {  
                    localStorage.banners = JSON.stringify(res.data.data.pc_pictures)
                    let action ={
                        type : type.GET_DETAIL_DATA,
                        payload: res.data.data
                    }
                    dispatch(action)
                })
            .catch(error => console.log(error)) 
        }   
    }
}




export default actionCreator