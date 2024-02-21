import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSongThunk } from '../../redux/songDetail'
import {redirect, useParams} from 'react-router-dom'
function SongDetail(){
    const {songId} = useParams()
    const dispatch = useDispatch()


    const currSong = useSelector(state=>state.currSong)
    const user = useSelector(state=>state.session.user)

    const [liked,setLiked] = useState(false)
    if (currSong?.user_likes?.includes(user.id)) setLiked(true)



    useEffect(()=>{
        dispatch(getSongThunk(songId))
    },[liked])

    function handlePlay(){
        window.alert('feature comming soon')
    }

    async function handleLike(){
        e.preventDefault()
        e.stopPropagation()
        e.stopPro
        if (!user){
            redirect('/login')
        }
        fetch(`/api/songs/${songId}/likes`,{
            method:'POST'
        })
        if(!liked) setLiked(true)
    }

    async function handleUnlike(){
        e.preventDefault()
        e.stopPropagation()
        if (!user){
            redirect('/login')
        }
        fetch(`/api/songs/${songId}/likes`,{
            method:'DELETE'
        })
        if(liked) setLiked(false)
    }
    if(!Object.keys(currSong).length) return null
    return (
        <>
            <div className="song-detail-header">
                <div className="song-image">
                    <img src = {currSong.image_url}/>
                </div>
                <div className = 'song-info'>
                    <h1>{currSong.title}</h1>
                    <div>
                        <span>{currSong.artist.first_name}</span>
                        <span>{currSong.created_at}</span>
                        <span>{currSong.likes}</span>
                    </div>
                </div>
                <div className='song-int'>
                    <button onClick={handlePlay}>play</button>
                    {liked && <button onClick={handleLike}>Unlike</button>}
                    {!liked && <button onClick={handleUnlike}>like</button>}
                </div>
            </div>
        </>

    )


}

export default SongDetail
