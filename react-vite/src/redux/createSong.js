//creating song action creator
const CREATE_SONG='/songs/CREATE_SONG'

export const createSong = (data)=>(
    {
        type:CREATE_SONG,
        data
    }
)


// THUNK ACTIONS
export const createSongThunk = (data)=> async (dispatch)=>{
    const response = await fetch('/api/songs/new',{
        method:'POST',
        body:data
    })
    const newSong = await response.json()
    if(response.ok){
        dispatch(createSong(newSong))
        return newSong
    }
    return data

}


const initialState = {}
function createSongReducer(state=initialState,action){
    switch(action.type){
        case CREATE_SONG:{
            const newObj = {}
            newObj[action.data] = action.data
            return newObj
        }
    }
    return state
}

export default createSongReducer
