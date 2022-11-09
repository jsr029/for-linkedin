
import axios from "axios"

export const pfDatas = (isLoading, data, error) => {
    return {
        type: "PFDATAS",
        payload: {
            isLoading: isLoading,
            data: data,
            error: error
        }
    }
}
export const receiveTreeData = (data) =>{
    return{
        type: 'DATA_RECEIVE',
        payload: data
    }
}
  
  export const treeRequestFailed = (err) => ({
    type: 'TREE_DATA_REQUEST_FAILED', err,
  })

  export const fetchTreeData = () => {
    return (dispatch) => {
      axios.get('./json/cv2.json')
        .then(res => dispatch(receiveTreeData(res.data)))
        .catch((err)=>{
            console.log(err)
            dispatch(treeRequestFailed(err))
        })
    }
  }
  
export const FETCH_CV = 'FETCH_CV';

export const getAllCvs = () => {
    const request = axios.get('./json/cv2.json');
      return {
    type: FETCH_CV,
    payload: request
  }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
