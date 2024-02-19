
// action creator

// getting all songs
const GET_SONGS = '/songs/GET_SONGS'
export const getSongs = (Songs)=>({
    type: GET_SONGS,
    Songs
})


// Thunk actions
export const getSongsThunk = ()=> async (dispatch)=>{
    const response = await fetch('/api/songs',{
        method:'GET'
    })
    const data = await response.json()
    if(response.ok){
        dispatch(getSongs(data.Songs))
        return data
    }
    return data
}


const initialState={}

function getSongsReducer(state = initialState,action){
    switch (action.type){
        case GET_SONGS:{
            const newObj = {}
            action.Songs.forEach(song => {newObj[song.id] = song})
            return newObj
        }
    }
    return state
}

export default getSongsReducer
