import axios from 'axios'
export function fetchAllPatientActions() {

return (dispatch) => {
     return axios.get("http://localhost:8081/patient/all").then(resp => {
    dispatch({
        type: "FetchAll",
        payload: resp.data
    });

}
)
}

}

