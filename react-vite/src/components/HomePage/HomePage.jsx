import { thunkLogout } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const logout = async e => {
        e.preventDefault()
        await dispatch(thunkLogout())
        navigate('/')
    }

    return (
        <>
            <div>HomePage</div>
            {sessionUser && (
                <button onClick={logout}>Log Out</button>
            )}
        </>
    )
}

export default HomePage
