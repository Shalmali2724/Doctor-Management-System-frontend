const initialState = {
     Patients: [],
}

function PatientReducer(state = initialState, action) {

     if (action.type === "FetchAll") {
          return {
               ...state,
               Patients: action.payload
          }
     }
     else {
          return state;
     }

}
export default PatientReducer;

