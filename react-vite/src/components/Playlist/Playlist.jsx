import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import { deletePlaylistThunk } from "../../redux/playlist";

function Playlist({ playlist, onDelete }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const deletePlaylist = async e => {
        e.preventDefault()
        dispatch(deletePlaylistThunk(playlist.id))
        onDelete();
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
                    <button onClick={deletePlaylist}>Delete Playlist</button>
                </>
            )}
        </div>
    );
}

export default Playlist;
