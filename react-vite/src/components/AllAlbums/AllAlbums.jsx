import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { loadAlbumsThunk } from "../../redux/album";

const AllAlbums = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const album = useSelector(state => state.newAlbum);
    const albumObj = Object.values(album);

    console.log('ALBUMS!!!!!!!', albumObj)

    useEffect(() =>{
        dispatch(loadAlbumsThunk());
    }, [dispatch])

    return (
        <div>
            <h1> HELLO </h1>
            <p>{album.title}</p>
        </div>
    )
}

export default AllAlbums;