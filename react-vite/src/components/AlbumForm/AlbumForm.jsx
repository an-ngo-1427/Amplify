import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { thunkCreateAlbum } from "../../redux/album"

function AlbumForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    if (!user) navigate('/login')

    const [title, setTitle] = useState()
    const [imageUrl, setImageurl] = useState()
    const [errObj, setErrobj] = useState({})
    const [formErr, setFormerr] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        if (Object.keys(errObj).length) setFormerr(true)
        else {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('image_url', imageUrl)

            dispatch(thunkCreateAlbum(formData))
                .then(result=>{navigate(`/albums/${result.id}`)})
        }
    }

    useEffect(() => {
        const obj = {}
        if (!title) obj.title = 'Title is required'

        setErrobj(obj)
    }, [title])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    placeholder="Album Title"
                    onChange={(e) => { setTitle(e.target.value) }}
                    name='title'
                    type='text'
                />
                {formErr && <div style = {{'color':'red'}}>{errObj.title}</div>}
            </div>
            <div>
                <input
                    placeholder="Album image url"
                    onChange={(e) => { setImageurl(e.target.value) }}
                    name='image_url'
                />
            </div>
            <button type='submit'>Create Album</button>
        </form>
    )
}


export default AlbumForm
