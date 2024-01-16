const initialState={
   patientReports:[] ,
   patientReport: null,
}
 function PatientReportReducer(state=initialState,action)

 {

if(action.type ==="patientReport/fetch")

{

    return{

        ...state,

       patientReport:action.payload

    }

}

else{

    return state;

}
 }
export default PatientReportReducer;