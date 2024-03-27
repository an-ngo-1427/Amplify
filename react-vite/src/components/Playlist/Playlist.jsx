import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import {
  deletePlaylistThunk,
  getUserPlaylistsThunk,
  removeSongFromPlaylist,
} from "../../redux/playlist";
import Songs from "./Songs";
import { getCurrSong, getPlaylist } from "../../redux/currSong";
// import AudioPlayerComp from "../AudioPlayerComp/AudioPlayerComp";
import "./PlaylistDetail.css";
import playlistImg from '../../../../images/playlist.png'

function Playlist({ playlist, onDelete }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlists[playlist.id].songs);

  const deletePlaylist = async (e) => {
    e.preventDefault();
    dispatch(deletePlaylistThunk(playlist.id));
    onDelete();
  };

  const handlePlaySong = (song) => {
    // e.preventDefault();
    dispatch(getCurrSong(song));
  };
  const removePlaylistSong = async (songId) => {
    await dispatch(removeSongFromPlaylist(songId, playlist.id));
    await dispatch(getUserPlaylistsThunk());
  };

  const handlePlaylist = () =>{
    dispatch(getPlaylist(songs))
  }

  return (
    <div className="playlist-details-container">
      <div className="playlist-info-container">
        <img
          src={playlist?.image_url.length ? playlist?.image_url : playlistImg}
          alt={`Playlist titled ${playlist?.title}`}
          className="playlist-details-art"
        />
        <div className="playlist-title-container">
          <p className="playlist-prefix">Playlist</p>
          <h1 className="playlist-details-title">{playlist?.title}</h1>
          <h2 className="playlist-details-description">
            {playlist?.description}
          </h2>
          <h3 className="playlist-owner">{sessionUser.username}</h3>
          <div>
          <button className = 'playlist-play-button' onClick={handlePlaylist}>Play</button>
          </div>
        </div>
      </div>
      <div className="playlist-buttons">
        <OpenModalButton
          buttonText="Add Song"
          modalComponent={<Songs playlist={playlist} />}
        />
        <OpenModalButton
          buttonText="Edit Playlist"
          modalComponent={<EditPlaylist playlist={playlist} />}
          className="edit-button-playlist"
        />
        <button onClick={deletePlaylist} className="delete-button-playlist">
          Delete Playlist
        </button>
      </div>
      <div className="playlist-details-songs">
        {songs.map((song) => (
          <div key={song.id} className="playlist-song-tile">
            <img
              src={song.image_url}
              alt={song.title}
              className="playlist-song-image"
            />
            <div className="song-info-text">
              <span className="playlist-song-title">{song.title}</span>
              <span className="playlist-song-artist">
                {song.artist.first_name} {song.artist.last_name}
              </span>
            </div>
            <div className="song-actions">
              <div
                onClick={() => handlePlaySong(song)}
                className="playlist-play-button"
              >
                Play
              </div>
              <button
                onClick={() => removePlaylistSong(song.id)}
                className="playlist-remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
