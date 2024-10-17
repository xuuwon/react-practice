import { useLocation, useParams } from "react-router-dom"

function User() {
    const {userId} = useParams();
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search);
    const userName = queryParams.get('name');

    return (
        <div>
            유저 ID : {userId}
            <br />
            유저 Name : {userName}
        </div>
    )
}

export default User