import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/MovieInfoPage.css'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MoviesPageContainer} from "./containers/MoviesPageContainer";
import {MoviesListComponent} from "./components/MoviesListComponent";
import {MovieInfoPageComponent} from "./components/MovieInfoPageComponent";
const AppLayout = () =>(
    <>
        <MoviesPageContainer/>
    </>
)
const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <MoviesListComponent/>
            },
            {
                path: '/movie',
                element: <MovieInfoPageComponent givenClass={'movie-info-footer'}/>
            }
        ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
