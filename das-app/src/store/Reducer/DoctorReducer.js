const initialState={
    Doctors:[],
}

 function DoctorReducer(state=initialState,action)
 {

if(action.type ==="FetchAll")
{
    return{
        ...state,
       Doctors:action.payload
    }
}
else{
    return state;
}


 }
 export  default DoctorReducer;