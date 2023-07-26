import {PosterPreviewComponent} from "./PosterPreviewComponent";
import {MovieInfoComponent} from "./MovieInfoComponent";

export const MoviesListCardComponent = ({movie}) => {
    const {adult, backdrop_path, genre_ids, id, original_language, original_title,
        overview, popularity, poster_path, release_date, title, video, vote_average,
        vote_count} = movie
    return(
        <div className='movie-card'>
            <PosterPreviewComponent poster={poster_path}/>
            <MovieInfoComponent movie={movie}/>
        </div>

    )
}