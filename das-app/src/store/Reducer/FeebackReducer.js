const initialState={
    Feedbacks:[]
}

 function feedbackReducer(state=initialState,action)
 {

if(action.type ==="FetchAll")
{
    return{
        ...state,
       Feedbacks:action.payload
    }
}
else{
    return state;
}


 }
 export  default feedbackReducer;