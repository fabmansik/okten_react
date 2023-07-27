import {PosterPreviewComponent} from "./PosterPreviewComponent";
import {MovieInfoComponent} from "./MovieInfoComponent";
import {StarsRatingComponent} from "./StarsRatingComponent";
import {Link} from "react-router-dom";
import {createContext, useContext} from "react";
import {GenresContext} from "./MoviesListComponent";
export const MoviesListCardComponent = ({movie}) => {
    const {adult, backdrop_path, genre_ids, id, original_language, original_title,
        overview, popularity, poster_path, release_date, title, video, vote_average,
        vote_count} = movie
    const genres = (useContext(GenresContext))
    return(
        <Link to='/movie' state={{movie, genres}}>
            <div className='movie-card'>
                <PosterPreviewComponent poster={poster_path}/>
                <MovieInfoComponent movie={movie}/>
                <div className='movie-rating'>
                    <StarsRatingComponent vote_count={vote_count} vote_average={vote_average}/>
                </div>
            </div>
        </Link>
    )
}