export const CREATE_ALBUM='/albums/CREATE_ALBUM'
export const LOAD_ALBUMS = '/albums/LOAD_ALBUMS'
// const UPLOAD_ALBUM_IMAGE='/albums/UPLOAD_ALBUM_IMAGE'

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
            console.log('THIS IS THE ACTION', action)
            action.Albums.forEach(album => {newObj[album.id] = album})
            return newObj
        }
        default:
            return state
    }
}

export default createAlbumReducer
