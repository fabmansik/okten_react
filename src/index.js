import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {MoviesPageContainer} from "./containers/MoviesPageContainer";
import {MoviesListComponent} from "./components/MoviesListComponent";
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
                path: '/dafafd',
                element: <div></div>
            }
        ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
