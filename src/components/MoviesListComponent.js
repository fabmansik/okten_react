import {ApiServices} from "../services/ApiServices";
import {createContext, useEffect, useState} from "react";
import {MoviesListCardComponent} from "./MoviesListCardComponent";
export const GenresContext = createContext([])
export const MoviesListComponent = () => {
    const [moviesList, setMoviesList] = useState([])
    const [getInfo, setGetInfo] = useState([])
    const [genres, setGenres] = useState([])
    const [pageUp, setPageUp] = useState(false)
    const [pageDown, setPageDown] = useState(false)
    const [defaultRender, setDefaultRender] = useState(true)
    useEffect(()=>{
        ApiServices.AxiosGetMovies(setMoviesList, setGetInfo)
        ApiServices.AxiosGetGenres(setGenres)
        }, [])
        console.log(getInfo)
    let leftButtonState
    getInfo.page === 1 ? leftButtonState=true : leftButtonState= false
    let rigthButtonState
    getInfo.page === getInfo.total_pages ? rigthButtonState=true : rigthButtonState= false
    return(
        <GenresContext.Provider value={genres}>
            <div className='movie-list'>
                {moviesList.map(movie=><MoviesListCardComponent key={movie.id} movie={movie}/>)}
            </div>
            <div className='page-info'>
                <div className='page-selector'>
                    <button className='left-button' disabled={leftButtonState} onClick={()=> {
                        ApiServices.AxiosGetMoviesPageDown(setMoviesList, setGetInfo, getInfo.page)
                    }}>Previous</button>
                    <span>{getInfo.page} ... {getInfo.total_pages}</span>
                    <button className='right-button' disabled={rigthButtonState} onClick={()=> {
                        ApiServices.AxiosGetMoviesPageUp(setMoviesList, setGetInfo, getInfo.page)
                    }}>Next</button>
                </div>
            </div>

        </GenresContext.Provider>
    )
}