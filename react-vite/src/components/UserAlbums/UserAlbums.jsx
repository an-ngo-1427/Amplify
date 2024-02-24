import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserAlbumsThunk } from "../../redux/album";
import AmplifyLogo from "../../image/amplifylogo.jpeg";

function UserAlbums() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const userAlbums = useSelector(state => state.newAlbum)

    console.log('THIS IS THE USER ALBUMS', userAlbums)

    if (!user) {
        navigate('/login')
    }

    useEffect(() => {
        dispatch(getUserAlbumsThunk(user.id))
    }, [dispatch])

    // const handleAlbumNavigate = async (e) => {
    //     e.preventDefault();
    //     navigate('/')
    // }

    return (
        <>
        <div className="amplify-navigation-bar">
                <NavLink to='/'>
                    <img className="amplify-logo" src={AmplifyLogo} />
                </NavLink>
        </div>
        <h1>Your Albums</h1>
        {userAlbums?.Albums?.map(album => (
            <NavLink key={album.id} to={`/albums/${album.id}`} className='album-title-details'>
                <img src={album.image_url} />
                {album.title}
            </NavLink>
        ))}
        </>
    )
}

export default UserAlbums
