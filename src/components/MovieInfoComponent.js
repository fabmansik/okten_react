import {ApiServices} from "../services/ApiServices";
import {useContext, useEffect, useState} from "react";
import {GenresContext} from "./MoviesListComponent";
import {GenreBadgeComponent} from "./GenreBadgeComponent";
export const MovieInfoComponent = ({movie}) => {
    const genresContext = (useContext(GenresContext))
    let genres = []
    movie.genre_ids.map(genre_id=>
        genresContext.find(genre => genre.id === genre_id ? genres.push(genre.name) :  0)
    )
    return(
        <>
            <div className='movie-title'>
                <h4>{movie.title}</h4>
                <img src='/location.png'></img>
                <div className='badges'>
                    {genres.map(genre=><GenreBadgeComponent badge={genre}/>
                    )}
                </div>
            </div>
        </>
    )
}