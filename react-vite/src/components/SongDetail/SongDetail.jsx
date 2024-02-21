import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; 

import { getSongThunk } from '../../redux/songDetail';

function SongDetail() {
    const { songId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const currSong = useSelector(state => state.currSong);
    const user = useSelector(state => state.session.user);

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (currSong?.user_likes?.includes(user?.id)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [currSong, user]);

    useEffect(() => {
        dispatch(getSongThunk(songId));
    }, [dispatch, songId]);

    const handlePlay = () => {
        window.alert('Feature coming soon');
    };

    const handleLike = async (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/login'); 
            return;
        }
        await fetch(`/api/songs/${songId}/likes`, {
            method: 'POST',
        });
        setLiked(true);
    };

    const handleUnlike = async (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/login'); 
            return;
        }
        await fetch(`/api/songs/${songId}/likes`, {
            method: 'DELETE',
        });
        setLiked(false);
    };

    if (!Object.keys(currSong).length) return null;
    return (
        <>
            <div className="song-detail-header">
                <div className="song-image">
                    <img src={currSong.image_url} alt={currSong.title}/>
                </div>
                <div className='song-info'>
                    <h1>{currSong.title}</h1>
                    <div>
                        <span>{currSong.artist.first_name}</span>
                        <span>{currSong.created_at}</span>
                        <span>{currSong.likes}</span>
                    </div>
                </div>
                <div className='song-int'>
                    <button onClick={handlePlay}>Play</button>
                    {liked ? <button onClick={handleUnlike}>Unlike</button> : <button onClick={handleLike}>Like</button>}
                </div>
            </div>
        </>
    );
}

export default SongDetail;
