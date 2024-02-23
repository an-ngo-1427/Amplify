
// action creator

// getting all songs
const GET_SONGS = '/songs/GET_SONGS'
export const getSongs = (Songs)=>({
    type: GET_SONGS,
    Songs
})

// getting all user songs
const GET_USER_SONGS = '/songs/GET_USER_SONGS'
export const getUserSongs = (songs)=>(
    {
        type:GET_USER_SONGS,
        songs
    }
)

// deleting a song
const DELETE_SONG = '/songs/DELETE_SONG'
export const deleteSong = (song)=>({
    type:DELETE_SONG,
    song
})


// Thunk actions
export const getSongsThunk = ()=> async (dispatch)=>{
    const response = await fetch('/api/songs',{
        method:'GET'
    })
    const data = await response.json()
    if(response.ok){
        dispatch(getSongs(data))
        return data
    }
    return data
}

// getting user songs thunk
export const getUserSongsThunk = (userId)=> async (dispatch)=>{
    const response = await fetch(`/api/songs/user/${userId}`)
    const data = await response.json()
    if(response.ok){
        dispatch(getUserSongs(data))
    }
    return data
}

export const deleteSongThunk = (songId) => async (dispatch)=>{
    const response = await fetch(`/api/songs/${songId}`,{
        method:'DELETE'
    })
    const data = await response.json()
    if(response.ok){
        dispatch(deleteSong(data))
        return data
    }
}

const initialState={}

export function getSongsReducer(state = initialState,action){
    switch (action.type){
        case GET_SONGS:{
            const newObj = {}
            action.Songs.songs.forEach(song => {newObj[song.id] = song})
            return newObj
        }
    }
    return state
}

export function getUserSongsReducer(state = initialState,action){
    switch(action.type){
        case GET_USER_SONGS:{
            const newObj = {}

            action.songs.Songs.forEach(song => {newObj[song.id] = song})
            return newObj
        }
        case DELETE_SONG:{
            let newObj = {...state}
            delete(newObj[action.song.id])
            return newObj
        }
    }
    return state
}
// module.exports = {getSongsReducer,getUserSongsReducer}
