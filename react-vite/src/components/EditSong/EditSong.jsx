import { useParams } from "react-router-dom"
import SongForm from "../CreateSong"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getSongThunk } from "../../redux/songDetail"

function EditSong(){
    const {songId} = useParams()
    const dispatch = useDispatch()
    const song = useSelector(state=>state.currSong)
    useEffect(()=>{
        dispatch(getSongThunk(songId))
    },[dispatch])
    return(
        <SongForm song={song}/>
    )
}

export default EditSong
