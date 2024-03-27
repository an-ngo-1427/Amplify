
const GET_CURR_SONG = '/songs/GET_CURR_SONG'

export const getCurrSong = (song)=>{
    return{
        type:GET_CURR_SONG,
        song
    }
}

const GET_PLAYLIST = '/songs/GET_PLAYLIST'

export const getPlaylist = (songs)=>{
    return{
        type:GET_PLAYLIST,
        songs
    }
}


const initialState = {}

function currSongReducer (state=initialState,action){
    switch(action.type){
        case GET_CURR_SONG:{
            let newObj = {}
            newObj[action.song.id] = action.song
            return newObj;
        }
        case GET_PLAYLIST:{
            let newObj={}
            action.songs.forEach((song)=>newObj[song.id] = song)
            return newObj
        }
    }

    return state
}

export default currSongReducer
