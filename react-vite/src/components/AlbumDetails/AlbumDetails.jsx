import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { deleteAlbum, loadOneAlbumThunk } from "../../redux/album";
import AlbumSongTile from "../AlbumSongTile/AlbumSongTile";
import "./AlbumDetails.css";
import Songs from "./Songs";
import OpenModalButton from "../OpenModalButton";
import AmplifyLogo from "../../image/amplifylogo.jpeg";
import EditAlbum from "../EditAlbum";
import { getPlaylist } from "../../redux/currSong";
function AlbumDetails() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const navigate = useNavigate();
  // const album = useSelector(state => state.newAlbum[albumId]);
  // const songs = useSelector(state => state.newAlbum[albumId]?.songs)
  const albumdata = useSelector((state) => state.currAlbum);
  const album = albumdata[albumId];
  const songs = album?.songs
  useEffect(() => {
    dispatch(loadOneAlbumThunk(albumId));
  }, [dispatch, albumId]);


  const handleDelete = async () => {
    await deleteAlbum(albumId).then((result) => {
      if (result.errors) {
        window.alert(result.errors);
      } else {
        navigate("/albums/manage");
      }
    });
  };

  const handlePlaylist = () =>{
    dispatch(getPlaylist(songs))
  }
  return (
    <div className="album-details-container">
      <div className="amplify-navigation-bar">
        <NavLink to="/">
          <img className="amplify-logo" src={AmplifyLogo} />
        </NavLink>
      </div>
      <div className="album-details-header">
        <div className="album-info-container">
          <img
            src={album?.image_url}
            alt={`Album titled ${album?.title}`}
            className="album-details-art"
          />
          <div className="album-title-container">
            <p className="album-prefix">Album</p>
            <h1 className="album-details-title">{album?.title}</h1>
            <button className = 'playlist-play-button' onClick={handlePlaylist}>Play</button>
          </div>
        </div>
        {sessionUser?.id === album?.user_id && (
          <div className="album-buttons">
            <OpenModalButton
              buttonText="Add to album"
              modalComponent={<Songs album={album} />}
            />
            <OpenModalButton
              buttonText='Edit Album'
              modalComponent={<EditAlbum album={album} />}
            />
            <button onClick={handleDelete} className="delete-button-album">
              Delete Album
            </button>
          </div>
        )}
      </div>
      <div className="album-details-songs">
        {album?.songs?.map((song) => (
          <AlbumSongTile key={song.id} song={song} album={album} type="Album" />
        ))}
      </div>
    </div>
  );
}

export default AlbumDetails;
