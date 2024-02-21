import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import { deletePlaylistThunk } from "../../redux/playlist";
import { useNavigate } from "react-router-dom";

function Playlist({ playlist }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deletePlaylist = async e => {
        e.preventDefault()
        dispatch(deletePlaylistThunk(playlist.id))
        navigate('/')
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
