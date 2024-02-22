import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongThunk } from '../../redux/songDetail';
import {useNavigate, useParams} from 'react-router-dom';
import { getCurrSong } from '../../redux/currSong';
function SongDetail(){
    const {songId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currSong = useSelector(state => state.currSong);
    const user = useSelector(state => state.session.user);

    const [liked,setLiked] = useState(false)

    const isCurrSong = Object.keys(currSong).length


    useEffect(()=>{
        dispatch(getSongThunk(songId))
        console.log(currSong)

        if (isCurrSong && user){
            console.log(currSong.user_likes,'outside')
            if(currSong.user_likes.includes(user.id)){
                setLiked(true)
                console.log(currSong.user_likes,'in if block')

            }
        }
        console.log('in effect',liked)
    },[liked,dispatch,songId,user,isCurrSong])

    function handlePlay(){
        dispatch(getCurrSong(currSong))
    }

    async function handleLike(e){
        e.preventDefault()
        e.stopPropagation()

        if (!user){
            navigate('/login')
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
        e.stopPropagation()
        if (!user){
            navigate('/login')
        }
        if(liked){
            fetch(`/api/songs/${songId}/likes`,{
                method:'DELETE'
            })
            setLiked(false)
        }
    }

    function handleEdit(e){
        e.preventDefault()
        navigate(`/songs/${currSong.id}/edit`)
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
            {user.id == currSong.user_id && <button onClick={handleEdit}>edit</button>}
        </>
    );
}

export default SongDetail;
