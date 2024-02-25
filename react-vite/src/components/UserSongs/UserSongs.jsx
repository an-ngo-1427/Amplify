import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, NavLink } from "react-router-dom"
import { getUserSongsThunk } from "../../redux/song"
import AlbumSongTile from "../AlbumSongTile/AlbumSongTile"
import AmplifyLogo from "../../image/amplifylogo.jpeg";
import './UserSongs.css'
function UserSongs() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const userSongs = useSelector(state => state.userSongs)
    if (!user) {
        navigate('/login')
    }

    useEffect(() => {
        dispatch(getUserSongsThunk(user.id))
    }, [dispatch])



    return (
        <div className="user-songs-container">
            <div className="amplify-navigation-bar">
                <NavLink to='/'>
                    <img className="amplify-logo" src={AmplifyLogo} />
                </NavLink>
            </div>
            <h1>Your Songs</h1>
            {Object.values(userSongs).map(song =>
                <NavLink to={`/songs/${song.id}`} key={song.id}>
                    <AlbumSongTile key={song.id} song={song} type='Songs' />
                </NavLink>
            )}
        </div>
    )
}

export default UserSongs
