
// action creator
// getting a song detail

const GET_SONG_ID = '/song/get_song_id'
export const getSong = (data)=>{
    return{
        type:GET_SONG_ID,
        data
    }
}

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

const initialState={}

function getSongReducer(state=initialState,action){
    switch (action.type){
        case GET_SONG_ID:{
            return action.data
        }
    }
    return state
}

export default getSongReducer
