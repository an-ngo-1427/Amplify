export const CREATE_ALBUM='/albums/CREATE_ALBUM'
export const LOAD_ALBUMS = '/albums/LOAD_ALBUMS'
export const LOAD_ONE_ALBUM = '/albums/LOAD_ONE_ALBUM'
export const GET_USER_ALBUMS = 'albums/GET_USER_ALBUMS'
export const ADD_TO_ALBUM = 'albums/ADD_TO_ALBUM'
export const REMOVE_FROM_ALBUM = 'albums/REMOVE_FROM_ALBUM'

// ACTION CREATOR

export const createAlbum = (data) => (
    {
        type: CREATE_ALBUM,
        data
    }
)

export const loadAlbums = (Albums) => (
    {
        type: LOAD_ALBUMS,
        Albums
    }
)
export const loadOneAlbum = (Album) => (
    {
        type: LOAD_ONE_ALBUM,
        Album
    }
)

export const getUserAlbums = (Albums) =>(
    {
        type:GET_USER_ALBUMS,
        Albums
    }
)

export const addSong = (song, albumId) => ({
    type: ADD_TO_ALBUM,
    song,
    albumId
})

export const removeSong = (songId, albumId) => ({
    type: REMOVE_FROM_ALBUM,
    songId,
    albumId
})

// export const uploadAlbumImage = (img) => (
//     {
//         type: UPLOAD_ALBUM_IMAGE,
//         img
//     }
// )

// THUNK ACTIONS
export const thunkCreateAlbum = (data) => async (dispatch) => {
    const response = await fetch('/api/albums/new', {
        method: 'POST',
        body: (data)
    })
    const newAlbum = await response.json()
    if (response.ok) {
        dispatch(createAlbum(newAlbum))
        return newAlbum
    }
    return newAlbum
}

export const loadAlbumsThunk = () => async(dispatch) => {
    const response = await fetch('api/albums')

    const data = await response.json();
    if (response.ok){
        dispatch(loadAlbums(data))
        return data
    }
    return data
}

export const loadOneAlbumThunk = (albumId) => async(dispatch) => {
    const response = await fetch(`/api/albums/${albumId}`)
    const data = await response.json();
    if (response.ok){
        dispatch(loadOneAlbum(data))
        return data
    }
    return data
}



export const getUserAlbumsThunk = (userId) => async(dispatch) =>{
    const response = await fetch(`/api/albums/user/${userId}`)
    const data = await response.json()
    if(response.ok){
        dispatch(getUserAlbums(data))
        return data
    }
    return data
}

export const addSongToAlbum = (song, albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}/songs/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({songId: [song.id]})
    })
    console.log(response)
    if(response.ok) {
        dispatch(addSong(song, albumId))
    }
}

export const removeSongFromAlbum = (songId, albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}/songs/${songId}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        dispatch(removeSong(songId, albumId))
    }
}

// export const thunkUploadImage = (img) => async (dispatch) => {
//     const response = await fetch ('/api/albums/')
// }

const initialState = {}
function createAlbumReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_ALBUM: {
            const newObj = {}
            newObj[action.data] = action.data
            return newObj
        }
        case LOAD_ALBUMS:{
            const newObj = {}
            action.Albums.forEach(album => {newObj[album.id] = album})
            return newObj
        }
        // case LOAD_ONE_ALBUM: {
        //     const newObj = { ...state };
        //     newObj[action.Album.id] = action.Album;
        //     return newObj;
        // }
        case ADD_TO_ALBUM: {
            state[action.albumId].songs.push(action.song)
            return state
        }
        // case REMOVE_FROM_ALBUM: {
        //     const songsArray = state[action.albumId].songs.filter(song => song.id !== action.songId)
        //     state[action.albumId].songs = songsArray
        //     console.log(state)
        //     const newObj = {}
        //     newObj = {...state}
        //     return newObj
        // }
        default:
            return state
    }
}

export function getUserAlbumsReducer(state=initialState,action){
    switch(action.type){
        case GET_USER_ALBUMS:{
            return action.Albums
        }

    }
    return state
}

export function getOneAlbumReducer(state = initialState,action){
    switch(action.type){
        case LOAD_ONE_ALBUM: {
            // const newObj = { ...state };
            const newObj = {}
            newObj[action.Album.id] = action.Album;
            return newObj;
        }
        case REMOVE_FROM_ALBUM: {
            const songsArray = state[action.albumId].songs.filter(song => song.id !== action.songId)
            state[action.albumId].songs = songsArray
            console.log(state)
            let newObj = {}
            newObj = {...state}
            return newObj
        }
    }
    return state
}
export default createAlbumReducer
