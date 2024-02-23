import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import {loadOneAlbumThunk} from "../../redux/album";
import AlbumSongTile from '../AlbumSongTile/AlbumSongTile';
import './AlbumDetails.css';
import Songs from './Songs';
import OpenModalButton from '../OpenModalButton';
import AmplifyLogo from "../../image/amplifylogo.jpeg";

function AlbumDetails() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(state => state.newAlbum[albumId]);
    const songs = useSelector(state => state.newAlbum[albumId]?.songs)

    useEffect(() => {
        dispatch(loadOneAlbumThunk(albumId));
    }, [dispatch, albumId]);

    if (!album) {
        return <div className="album-details-loading">Loading...</div>;
    }

    return (
        <div className="album-details-container">
            <div className="amplify-navigation-bar">
                <NavLink to='/'>
                    <img className="amplify-logo" src={AmplifyLogo} />
                </NavLink>
            </div>
            <div className="album-details-header">
                <img src={album.image_url} alt={`Album titled ${album.title}`} className="album-details-art" />
                <div className="album-title-container">
                    <p className="album-prefix">Album</p>
                    <h1 className="album-details-title">{album.title}</h1>
                </div>
                {sessionUser?.id === album?.user_id && (
                    <OpenModalButton
                        buttonText='Add to album'
                        modalComponent={<Songs album={album} />}
                    />
                )}
            </div>
            <div className="album-details-songs">
                {songs?.map((song) => (
                    <AlbumSongTile key={song.id} song={song} album={album} />
                ))}
            </div>
        </div>
    );
}

export default AlbumDetails;
