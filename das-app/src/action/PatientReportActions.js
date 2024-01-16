import axios from 'axios'

export function fetchPatientReportAction(patientId) {

    return (dispatch) => {

        return axios.get("http://localhost:8081/ipatientreport/"+patientId).then(resp => {

            dispatch({

                type: "patientReport/fetch",

                payload: resp.data

            });

        }

        ).catch(error=>{
            alert(error.response.data)
        })
    }
}