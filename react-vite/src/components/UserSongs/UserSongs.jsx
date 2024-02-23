import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getUserSongsThunk } from "../../redux/song"
import AlbumSongTile from "../AlbumSongTile/AlbumSongTile"

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
        <>

            <h1>Your Songs</h1>
            {Object.values(userSongs).map(song => <AlbumSongTile key = {song.id} song={song}/>)}
        </>
    )
}

export default UserSongs