
const GET_CURR_SONG = '/songs/GET_CURR_SONG'

export const getCurrSong = (song)=>{
    return{
        type:GET_CURR_SONG,
        song
    }
}

const initialState = {}

function currSongReducer (state=initialState,action){
    switch(action.type){
        case GET_CURR_SONG:{
            return action.song
        }
    }
    return state
}

export default currSongReducer
