import { useDispatch, useSelector } from "react-redux";
import { getSongsThunk } from "../../redux/song";
import { useEffect} from "react";
import "./Playlist.css";
import { addSongToPlaylist, getUserPlaylistsThunk } from "../../redux/playlist";
// import { useModal } from "../../context/Modal";

function Songs({ playlist }) {
  const dispatch = useDispatch();
  const Songs = useSelector((state) =>state.songs);
  const playListSongs = playlist.songs.map(song=>song.id)
  const allSongs = Object.values(Songs).filter(song=> !playListSongs.includes(song.id))
  const userPlaylists = useSelector(state=>state.playLists)



  useEffect(() => {
    dispatch(getSongsThunk());
  }, [dispatch,userPlaylists]);


  const addToPlaylist = async (e,song) => {

    e.preventDefault()
    e.target.disabled = true

    dispatch(addSongToPlaylist(song, playlist.id))
    .then(()=>{dispatch(getUserPlaylistsThunk())})
  };

  return (
    <div className="add-song-container">
      <h2>Let&apos;s find something for your playlist</h2>
      {allSongs.map((song) => {
        // const album = allAlbums.find((al) => al.id === song.album_id);
        // !playlist.songs.includes(song.id)
        return (
          <div key={song.id} className="song-item">
            <div className="song-details">
              <img
                src={song.image_url}
                alt={song.title}
                className="playlist-song-image"
              />
              <div className="song-info">
                <li className="playlist-song-title">{song.title}</li>
                {/* <span>{album?.title}</span> */}
              </div>
            </div>
            <button
              className="add-playlist-button"
              onClick={(e) => addToPlaylist(e,song)}
            >
              Add to playlist
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Songs;
