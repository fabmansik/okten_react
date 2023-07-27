import {Outlet} from "react-router-dom";
import React from "react";
import {HeaderComponent} from "../components/HeaderComponent";

export const MoviesPageContainer = (givenClass) => {
    console.log(givenClass)
    return(
        <div className='movie-page'>
            <HeaderComponent/>
            <Outlet/>
            <footer className={`${givenClass}`}>
                Project made by Milan Somyk
            </footer>
        </div>

    )
}