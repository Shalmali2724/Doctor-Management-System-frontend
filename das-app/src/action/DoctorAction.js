import axios from 'axios';
export function fetchAllDoctorActions() {
    return (dispatch) => {
        return axios.get("http://localhost:8081/doctor/all").then(
            resp => {
                dispatch({
                    type: "FetchAll",
                    payload: resp.data
                });
            }
        )
    }
}
