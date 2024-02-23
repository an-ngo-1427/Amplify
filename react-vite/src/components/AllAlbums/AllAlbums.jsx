import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadAlbumsThunk } from "../../redux/album";
import './AllAlbums.css';

const AllAlbums = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.newAlbum);
  const albumObj = Object.values(album);

  useEffect(() => {
    dispatch(loadAlbumsThunk());
  }, [dispatch]);

  return (
    <>
      <div className="all-albums-container">
        {albumObj.map((album) => (
          <div
            className="all-album-item"
            key={album.id}
            onClick={() => navigate(`/albums/${album.id}`)}
          >
            <h2 className="all-album-title">{album.title}</h2>
            <img
              src={album.image_url}
              alt={album.title}
              className="all-album-image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllAlbums;
