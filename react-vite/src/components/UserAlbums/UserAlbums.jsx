import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserAlbumsThunk } from "../../redux/album";
import AmplifyLogo from "../../image/amplifylogo.jpeg";
import "./UserAlbums.css";

function UserAlbums() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userAlbums = useSelector((state) => state.userAlbums);

  console.log("THIS IS THE USER ALBUMS", userAlbums);

  if (!user) {
    navigate("/login");
  }

  useEffect(() => {
    dispatch(getUserAlbumsThunk(user.id));
  }, [dispatch]);

  return (
    <>
      <div className="amplify-navigation-bar">
        <NavLink to="/">
          <img className="amplify-logo" src={AmplifyLogo} alt="Amplify Logo" />
        </NavLink>
      </div>
      <h1>Your Albums</h1>
      <div className="user-albums-container">
        {userAlbums?.Albums?.map((album) => (
          <NavLink
            key={album.id}
            to={`/albums/${album.id}`}
            className="album-title-details"
          >
            <img src={album.image_url} alt={album.title} />
            <span>{album.title}</span>
          </NavLink>
        ))}
      </div>
      <div>
        <NavLink to="/albums/new" className="create-new-album-link">
          Create New Album
        </NavLink>
      </div>
    </>
  );
}

export default UserAlbums;
