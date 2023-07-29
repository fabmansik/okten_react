import {Link, useParams} from "react-router-dom";
import {UserInfoComponent} from "./UserInfoComponent";
import {useContext, useEffect, useState} from "react";
import {Context750, ThemeContext} from "../containers/MoviesPageContainer";
import {useForm} from "react-hook-form";
import {ApiServices} from "../services/ApiServices";
import {GenresContext} from "./MoviesListComponent";
export const HeaderComponent = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const params = useParams()
    const small750 = useContext(Context750)
    const {register, watch} = useForm()
    const [showPop, setShowPop] = useState('hidden')
    const [searchMovies, setSearchMovies] = useState([])
    const watchPop = watch('pop-up');
    const genres = useContext(GenresContext)
    useEffect(()=>{
        ApiServices.AxiosSearchMovie(watchPop,setSearchMovies)
    },[watchPop])
    return(
        <header className={theme}>
            {!small750 &&<div className='header-imgs'>
                <Link to={Object.keys(params).length <=1 ? `/`: `/${params.page}`}>
                    <img className='logo-img' src={`/Logo_${theme}.png`}></img>
                </Link>
                <div className={`menu-img ${theme}`} onClick={()=>{
                    theme === 'light'?
                        setTheme('dark') || localStorage.setItem('theme','dark') :
                        setTheme('light') || localStorage.setItem('theme','light')}
                }>
                    <div className={`line ${theme}`} style={{marginLeft: `${theme}`, transition: '1s'}}>
                        <img className='light-img' src='/light-bulb.png' />
                        <img className='dark-img' src='/moon.png'/>
                    </div>
                </div>
            </div>
            }
            {small750 &&
                <>
                    <div className={`menu-img ${theme}`} onClick={()=>{
                        theme === 'light'?
                            setTheme('dark') || localStorage.setItem('theme','dark') :
                            setTheme('light') || localStorage.setItem('theme','light')}
                    }>                        <div className={`line ${theme}`} style={{marginLeft: `${theme}`, transition: '1s'}}>
                            <img className='light-img' src='/light-bulb.png' />
                            <img className='dark-img' src='/moon.png'/>
                        </div>
                    </div>
                    <Link to={Object.keys(params).length <=1 ? `/`: `/${params.page}`}>
                        <img className='logo-img' src={`/Logo_${theme}.png`}></img>
                    </Link>
                </>
            }
            <div className={`search ${theme}`}>
                <input type='text' {...register('pop-up')} onFocus={()=>setShowPop('shown')}>
                </input>
                 <div className={`pop-up-menu ${showPop} ${theme}`} onClick={()=>setShowPop('hidden')} >
                     {searchMovies.results?.map(element=>
                         <Link to={`/${params.page}/${element.id}`} state={{genres, element}} preventScrollReset={false} key={element.id}>
                             <div className={`find-element`}>
                                 {<img className={`find-poster`}
                                       src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} alt={'Poster'}/>}
                                 <p className={`search-title`}>{element.title}</p>
                                 <p>{element.vote_average.toFixed(2)}</p>
                             </div>
                         </Link>
                     )}
                 </div>
                <img className={`shape-img`} src={`/shape_${theme}.png`}></img>
            </div>
            {!small750 &&<UserInfoComponent/>}
        </header>
    )
}