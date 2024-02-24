import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getSongThunk } from '../../redux/songDetail'
import { getCurrSong } from '../../redux/currSong'
import { deleteSongThunk } from '../../redux/song'
import AmplifyLogo from "../../image/amplifylogo.jpeg";
import './SongDetail.css'
function SongDetail() {
    const { songId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currSong = useSelector(state => state.currSong);
    const user = useSelector(state => state.session.user);
    const [liked, setLiked] = useState(currSong?.user_likes?.includes(user.id))

    const isCurrSong = Object.keys(currSong).length
    let dateString = currSong?.created_at
    dateString = dateString?.substring(5, dateString.length - 13)
    console.log(dateString)

    console.log('rendering:', liked)
    useEffect(() => {
        dispatch(getSongThunk(songId))
    }, [dispatch, isCurrSong, liked])

    function handlePlay() {
        dispatch(getCurrSong(currSong))
    }

    async function handleLike(e) {
        e.preventDefault()
        e.stopPropagation()

        if (!user) {
            navigate('/login')
        }
        await fetch(`/api/songs/${songId}/likes`, {
            method: 'POST'
        })
        setLiked(true)
    }



    async function handleUnlike(e) {
        e.preventDefault()
        e.stopPropagation()
        if (!user) {
            navigate('/login')
        }

        await fetch(`/api/songs/${songId}/likes`, {
            method: 'DELETE'
        })
        setLiked(false)
        // setLiked(false)

    }

    function handleEdit(e) {
        e.preventDefault()
        navigate(`/songs/${currSong.id}/edit`)
    }

    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteSongThunk(songId))
            .then(navigate('/songs/manage'))
    }
    if (!Object.keys(currSong).length) return null
    return (
        <div className='song-detail-page'>
            <div className="amplify-navigation-bar">
                <NavLink to='/'>
                    <img style={{ "width": "15%" }} className="amplify-logo" src={AmplifyLogo} />
                </NavLink>
            </div>
            <div className="song-detail-header">
                <div className='song-header-child1'>
                    <div className="song-image">
                        <img className="song-image-child" src={currSong.image_url} alt={currSong.title} />
                    </div>
                    <div className='song-info'>
                        <h1>{currSong.title}</h1>
                        <div className='song-info-details'>
                            <span>{currSong.artist.first_name}</span>
                            <span>{dateString}</span>
                            <span>Likes {currSong.likes}</span>
                        </div>
                        <i onClick={() => { handlePlay() }} className="fa-regular fa-circle-play" />
                    </div>

                </div>
                <div className='song-int'>
                    {currSong.user_id != user.id && liked && <button onClick={(e) => handleUnlike(e)}>Unlike</button>}
                    {currSong.user_id != user.id && !liked && <button onClick={(e) => handleLike(e)}>like</button>}

                </div>
            </div>
            <div className='song-buttons'>
                {user.id == currSong.user_id && <button className='edit-song' onClick={handleEdit}>edit</button>}
                {user.id == currSong.user_id && <button className='delete-song' onClick={handleDelete}>delete</button>}
            </div>
            <div>
                <NavLink to="/songs/manage">Manage songs</NavLink>
            </div>
        </div>
    );
}

export default SongDetail;
