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

    const [liked,setLiked] = useState(false)



    useEffect(()=>{

        if (Object.keys(currSong).length){
            console.log('entered')
            if(currSong.user_likes.includes(user.id)) setLiked(true)
        }
        console.log('in effect',liked)
        dispatch(getSongThunk(songId))
    },[liked,songId])

    function handlePlay(){
        window.alert('feature comming soon')
    }

    async function handleLike(e){
        e.preventDefault()
        e.stopPropagation()

        if (!user){
            redirect('/login')
        }
        if(!liked){
            fetch(`/api/songs/${songId}/likes`,{
                method:'POST'
            })
            setLiked(true)
        }

    }

    async function handleUnlike(e){
        e.preventDefault()
        console.log(liked)
        if (!user){
            redirect('/login')
        }
        if(liked){
            setLiked(false)
            fetch(`/api/songs/${songId}/likes`,{
                method:'DELETE'
            })
        }
    }
    if(!Object.keys(currSong).length) return null
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
                    <button onClick={handlePlay}>play</button>
                    {liked && <button onClick={(e)=>handleUnlike(e)}>Unlike</button>}
                    {!liked && <button onClick={(e)=>handleLike(e)}>like</button>}
                </div>
            </div>
        </>
    );
}

export default SongDetail;
