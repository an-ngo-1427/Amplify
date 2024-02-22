const CREATE_ALBUM='/albums/CREATE_ALBUM'

// const UPLOAD_ALBUM_IMAGE='/albums/UPLOAD_ALBUM_IMAGE'

// ACTION CREATOR

export const createAlbum = (data) => (
    {
        type: CREATE_ALBUM,
        data
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
        default:
            return state
    }
}

export default createAlbumReducer
