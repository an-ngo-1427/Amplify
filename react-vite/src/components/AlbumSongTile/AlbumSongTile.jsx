import { useDispatch, useSelector } from "react-redux";
import { getCurrSong } from "../../redux/currSong";
import './AlbumSongTile.css';
import { useNavigate } from "react-router-dom";
import {loadOneAlbumThunk, removeSongFromAlbum } from "../../redux/album";

const AlbumSongTile = ({ song, album }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handlePlaySong = (e) => {
        e.preventDefault()
        dispatch(getCurrSong(song));
    };

    const removeAlbumSong = (e) => {
        e.preventDefault()
        dispatch(removeSongFromAlbum(song.id, album.id))
        .then(dispatch(loadOneAlbumThunk(album.id)))
    }

    return (
        <>
            <div className="album-song-tile" >
                <div
                onClick={()=>navigate(`/songs/${song.id}`)}
                className="album-song-info">
                    <span className="album-song-title">{song.title}</span>
                    <span className="album-song-artist">{song.artist.first_name} {song.artist.last_name}</span>
                </div>
                <div onClick={(e)=>handlePlaySong(e)} className="album-play-button">Play</div>
            </div>
            {sessionUser.id === album?.user_id && (
                <button onClick={removeAlbumSong}>Remove</button>
            )}
        </>
    );
}

export default AlbumSongTile;
