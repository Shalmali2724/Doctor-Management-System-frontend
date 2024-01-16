
const initialState={
    Appointments:[]
}

 function appointmentReducer(state=initialState,action)
 {

if(action.type ==="FetchAll")
{
    return{
        ...state,
       Appointments:action.payload
    }
}
else{
    return state;
}


 }
 export  default appointmentReducer;