import axios from 'axios'
export function fetchAllAppointmentAction() {

    return (dispatch) => {
        return axios.get("http://localhost:8081/appointement/getall").then(resp => {
            dispatch({
                type: "FetchAll",
                payload: resp.data
            });

        }
        )
    }


}