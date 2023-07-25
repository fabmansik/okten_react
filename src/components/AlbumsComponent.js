import {useEffect, useState} from "react";
import {apiServices} from "../services/ApiServices";

export const AlbumsComponent = () => {
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
        apiServices.AxiosGetAlbums(setAlbums)
    },[])
    return(
        <div className='albums' style={{display: 'grid', marginRight: "auto", marginLeft: "auto", width: '98%',marginTop: '10vh', grid: 'auto-flow 120px / repeat(3, 32.66666%)', columnGap: '1%'}}>
            {albums.map(album=>
                <div className='album'>
                    <h3>{album.title}</h3>
                    <div className='album-info'>
                        <p>Id: {album.id}</p>
                        <p>User Id: {album.userId}</p>
                    </div>
                </div>)}
        </div>
    )
}