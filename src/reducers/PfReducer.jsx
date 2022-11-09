const pfReducer = (state={ isLoading:true, data:{}, error:false }, action) => {
    switch(action.type){
        case 'PFDATAS':
            return state = {
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default pfReducer