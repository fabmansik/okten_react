import {Link, useParams} from "react-router-dom";
import {UserInfoComponent} from "./UserInfoComponent";
import {createContext, useContext, useEffect, useState} from "react";
import {Context750, ThemeContext} from "../containers/MoviesPageContainer";

export const HeaderComponent = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const params = useParams()
    const small750 = useContext(Context750)
    return(
        <header className={theme}>
            {!small750 &&<div className='header-imgs'>
                <Link to={Object.keys(params).length <=1 ? `/`: `/${params.page}`}>
                    <img className='logo-img' src={`/Logo_${theme}.png`}></img>
                </Link>
                <div className={`menu-img ${theme}`} onClick={()=>{theme === 'light'? setTheme('dark') : setTheme('light')}}>
                    <div className={`line ${theme}`} style={{marginLeft: `${theme}`, transition: '1s'}}>
                        <img className='light-img' src='/light-bulb.png' />
                        <img className='dark-img' src='/moon.png'/>
                    </div>
                </div>
            </div>}
            {small750 &&
                <>
                    <div className={`menu-img ${theme}`} onClick={()=>{theme === 'light'? setTheme('dark') : setTheme('light')}}>
                        <div className={`line ${theme}`} style={{marginLeft: `${theme}`, transition: '1s'}}>
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
                <input type='text'></input><img className={`shape-img`} src={`/shape_${theme}.png`}></img>
            </div>
            {!small750 &&<UserInfoComponent/>}
        </header>
    )
}