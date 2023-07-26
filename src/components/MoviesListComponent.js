import {ApiServices} from "../services/ApiServices";
import {createContext, useEffect, useState} from "react";
import {MoviesListCardComponent} from "./MoviesListCardComponent";
export const GenresContext = createContext([])
export const MoviesListComponent = () => {
    const [moviesList, setMoviesList] = useState([])
    const [getInfo, setGetInfo] = useState([])
    const [genres, setGenres] = useState([])
    console.log(getInfo)
    useEffect(()=>{
        ApiServices.AxiosGetMovies(setMoviesList, setGetInfo)
        ApiServices.AxiosGetGenres(setGenres)
        }, [])

    return(
        <GenresContext.Provider value={genres}>
            <div className='movie-list'>
                {moviesList.map(movie=><MoviesListCardComponent key={movie.id} movie={movie}/>)}
            </div>
        </GenresContext.Provider>
    )
}