import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadOneAlbumThunk } from "../../redux/album";
import AlbumSongTile from '../AlbumSongTile/AlbumSongTile';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

function AlbumDetails() {
    const dispatch = useDispatch()
    const {albumId} = useParams()
    const album = useSelector(state => state.newAlbum);
    const albumObj = Object.values(album);

    useEffect(() => {
        dispatch(loadOneAlbumThunk(albumId))
    }, [dispatch, albumId])

    return (
        <>
            {albumObj.map((albumDetail, index) => (
                <div key={index}>
                    <p>{albumDetail.title}</p>
                    <img src={albumDetail.image_url} alt={`Album titled ${albumDetail.title}`} />
                    <div>
                        {albumDetail.songs?.map((song) => (
                            <AlbumSongTile key={song.id} song={song} />
                        ))}
                    </div>
                    <div>
                        <MusicPlayer />
                    </div>
                </div>
            ))}
        </>
    );
}

export default AlbumDetails;
