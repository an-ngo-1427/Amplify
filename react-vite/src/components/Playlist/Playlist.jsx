import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import EditPlaylist from "../EditPlaylist/EditPlaylist"

function Playlist() {
    const sessionUser = useSelector(state => state.session.user)
    const { playlistId } = useParams()
    const playlist = useSelector(state => state.playlists[playlistId])

    // console.log(sessionUser)

    return (
        <div>
            <h2>{playlist.title}</h2>
            <h3>{sessionUser.username}</h3>
            <OpenModalButton
                buttonText='...'
                modalComponent={<EditPlaylist />}
            />
        </div>
    )
}

export default Playlist
