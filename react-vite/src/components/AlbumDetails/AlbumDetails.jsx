import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadOneAlbumThunk } from "../../redux/album";
import AlbumSongTile from '../AlbumSongTile/AlbumSongTile';
import './AlbumDetails.css';

function AlbumDetails() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(state => state.newAlbum[albumId]);

    useEffect(() => {
        dispatch(loadOneAlbumThunk(albumId));
    }, [dispatch, albumId]);

    if (!album) {
        return <div className="album-details-loading">Loading...</div>;
    }

    return (
        <div className="album-details-container">
            <div className="album-details-header">
                <img src={album.image_url} alt={`Album titled ${album.title}`} className="album-details-art" />
                <div className="album-title-container">
                    <p className="album-prefix">Album</p>
                    <h1 className="album-details-title">{album.title}</h1>
                </div>
            </div>
            <div className="album-details-songs">
                {album.songs?.map((song) => (
                    <AlbumSongTile key={song.id} song={song} />
                ))}
            </div>
        </div>
    );
}

export default AlbumDetails;
