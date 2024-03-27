import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { getUserSongsThunk } from "../../redux/song";
import AlbumSongTile from "../AlbumSongTile/AlbumSongTile";
import AmplifyLogo from "../../image/amplifylogo.jpeg";
import "./UserSongs.css";

function UserSongs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userSongs = useSelector((state) => state.userSongs);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch(getUserSongsThunk(user?.id));
  }, [dispatch, navigate, user]);

  return (
    <div className="user-songs-container">
      <div className="amplify-navigation-bar">
        <NavLink to="/">
          <img className="amplify-logo" src={AmplifyLogo} />
        </NavLink>
      </div>
      <div className="user-songs-page">
        <h1>Your Songs</h1>
        {Object.values(userSongs).map((song) => (
          <NavLink to={`/songs/${song.id}`} key={song.id}>
            <AlbumSongTile key={song.id} song={song} type="Songs" />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserSongs;
