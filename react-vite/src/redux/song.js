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
        headers:{'Content-Type':"multipart/form-data"},
        body:data
    })


        console.log(response)
    dispatch(createSong(data))
}


const initialState = {}
function songReducer(state=initialState,action){
    switch(action.type){
        case CREATE_SONG:{
            const newObj = {}
            newObj[action.data] = action.data
            return newObj
        }
    }
    return state
}

export default songReducer
