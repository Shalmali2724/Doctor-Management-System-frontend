import react from 'react';
import {useNavigate} from 'react-router-dom';
function Logout() {
    const user = JSON.parse(localStorage.getItem("mytoken"));
    const navigate = useNavigate();
    const handleLogout = () => {
        if(user !== null) {
            localStorage.removeItem("mytoken");
            alert("logout");
            navigate("/");
        }

    }
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}
export default Logout;