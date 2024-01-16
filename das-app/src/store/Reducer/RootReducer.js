import { combineReducers } from "redux";

import appointmentReducer from "./AppointmentReducer";
import doctorReducer from"./DoctorReducer";
import patientReportreducer from "./PatientReportReducer";
import patientReducer from "./PatientReducer";
import FeedbackReducer from"./FeebackReducer";
const rootReducer=combineReducers(
    {
    
        appointmentReducer,
        doctorReducer,
        patientReportreducer,
        patientReducer,
        FeedbackReducer

    }
)
export default rootReducer;