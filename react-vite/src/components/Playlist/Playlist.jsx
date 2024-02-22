import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import { deletePlaylistThunk } from "../../redux/playlist";
import Songs from './Songs'

function Playlist({ playlist }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const songs = playlist.songs

    const addSong = async e => {
        e.preventDefault()
    }

    const deletePlaylist = async e => {
        e.preventDefault()
        dispatch(deletePlaylistThunk(playlist.id))
    }

    return (
        <div>
            {playlist && (
                <>
                    <h2>{playlist.title}</h2>
                    <h4>{playlist.description}</h4>
                    <h3>{sessionUser.username}</h3>
                    <OpenModalButton
                        buttonText='...'
                        modalComponent={<EditPlaylist playlist={playlist}/>}
                    />
                    <ul>
                        {songs.map(song => (
                            <li key={song.id}>{song.name}</li>
                        ))}
                    </ul>
                    <OpenModalButton
                        buttonText='Add Song'
                        modalComponent={<Songs/>}
                    />
                    <button onClick={deletePlaylist}>Delete Playlist</button>
                </>
            )}
        </div>
    );
}

export default Playlist;
