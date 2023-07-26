import {Outlet} from "react-router-dom";
import React from "react";
import {HeaderComponent} from "../components/HeaderComponent";

export const MoviesPageContainer = () => {
    return(
        <>
            <HeaderComponent/>
            <Outlet/>
        </>

    )
}