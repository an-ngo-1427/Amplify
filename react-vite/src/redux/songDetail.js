
// action creator
// getting a song detail

import SongDetail from "../components/SongDetail/SongDetail"

const GET_SONG_ID = '/song/get_song_id'
const DELETE_SONG = 'song/DELETE_SONG'

export const getSong = (data)=>{
    return{
        type:GET_SONG_ID,
        data
    }
}

const deleteSong = (song) => (
    {
        type: DELETE_SONG,
        song
    }
)

// thunk action
export const getSongThunk = (songId)=>async (dispatch)=>{

    const response = await fetch(`/api/songs/${songId}`)
    const data = await response.json()
    if(response.ok){
        dispatch(getSong(data))
        return data
    }
    return data
}

export const thunkDeleteSong = (songId) => async (dispatch) => {
    const response = await fetch(`/api/songs/${songId}`, {
        method: 'DELETE'
    })
   
    if (response.ok) {
        dispatch(deleteSong(songId));
    }
}

const initialState={}

function getSongReducer(state=initialState,action){
    switch (action.type){
        case GET_SONG_ID:{
            return action.data
        }
        case DELETE_SONG: {
            const newState = { ...state }
            delete newState[action.songId]
            return newState
        }
    }
    return state
}

export default getSongReducer
