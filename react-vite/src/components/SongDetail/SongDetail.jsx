import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getSongThunk } from "../../redux/songDetail";
// import { getCurrSong } from "../../redux/currSong";
import { deleteSongThunk } from "../../redux/song";
import AmplifyLogo from "../../image/amplifylogo.jpeg";
import "./SongDetail.css";
function SongDetail() {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currSong = useSelector((state) => state.currSong);
  const user = useSelector((state) => state.session.user);
  const liked = currSong?.user_likes?.includes(user?.id)

  const isCurrSong = Object.keys(currSong).length;
  let dateString = currSong?.created_at;
  dateString = dateString?.substring(5, dateString.length - 13);
  // console.log(dateString);

  // console.log("rendering:", liked);
  useEffect(() => {
    dispatch(getSongThunk(songId));
  }, [dispatch, isCurrSong, liked]);

  // function handlePlay() {
  //   dispatch(getCurrSong(currSong));
  // }

  async function handleLike(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate("/login");
    }
    await fetch(`/api/songs/${songId}/likes`, {
      method: "POST",
    })

    dispatch(getSongThunk(songId))
  }

  async function handleUnlike(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      navigate("/login");
    }

    await fetch(`/api/songs/${songId}/likes`, {
      method: "DELETE",
    })

    dispatch(getSongThunk(songId))


  }

  function handleEdit(e) {
    e.preventDefault();
    navigate(`/songs/${currSong.id}/edit`);
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteSongThunk(songId)).then(navigate("/songs/manage"));
  }
  if (!Object.keys(currSong).length) return null;
  return (
    <div className="song-detail-container">
      <div className="amplify-navigation-bar">
        <NavLink to="/">
          <img className="amplify-logo" src={AmplifyLogo} alt="Amplify" />
        </NavLink>
      </div>
      {currSong.album_id && <NavLink className = 'album-link' to={`/albums/${currSong.album_id}`}>Go to Album</NavLink>}
      <div className="song-details-header">
        <div className="song-info-container">
          <img
            src={currSong.image_url}
            alt={currSong.title}
            className="song-details-art"
          />
          <div className="song-title-container">
            <p className="song-prefix">Song</p>
            <h1 className="song-details-title">{currSong.title}</h1>
            <div className="song-info-details">
              <span className="song-detail">
                By: {currSong.artist.first_name}
              </span>
              <span className="song-detail">Created On: {dateString}</span>
              <span className="song-detail">Likes: {currSong.likes}</span>
            </div>
          </div>
        </div>
        <div className="song-buttons">
          {currSong.artist.id != user.id && liked && (
            <button className = 'album-play-button'onClick={(e) => handleUnlike(e)}>Unlike</button>
          )}
          {currSong.artist.id != user.id && !liked && (
            <button className = 'album-play-button' onClick={(e) => handleLike(e)}>Like</button>
          )}
          {user?.id === currSong.user_id && (
            <button className="edit-song" onClick={handleEdit}>
              Edit
            </button>
          )}
          {user?.id === currSong.user_id && (
            <button className="delete-song-detail" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
      <div>
        <NavLink to="/songs/manage" className="manage-songs-btn">
          Manage Songs
        </NavLink>
      </div>
    </div>
  );
}

export default SongDetail;
