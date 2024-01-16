import axios from 'axios'
export function fetchAllFeedbackAction() {

    return (dispatch) => {
        return axios.get("http://localhost:8081/feedback/all").then(resp => {
            dispatch({
                type: "FetchAll",
                payload: resp.data
            });

        }
        )
    }


}