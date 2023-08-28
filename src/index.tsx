import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import {
    createBrowserRouter,
    RouterProvider,
    Link, Outlet,
} from "react-router-dom";
import CarsContainer from "./components/CarsContainer/CarsContainer";
import RickAndMortyContainer from "./components/RickAndMortyContainer/Episodes/RickAndMortyContainer";
import Characters from "./components/RickAndMortyContainer/Characters/Characters";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <header>
                    <h2>Redux Toolkit Homework</h2><br/>
                    <h4><Link to='cars'>Cars Api</Link></h4>
                    <h4><Link to='rickAndMorty'>Rick and Morty Api</Link></h4>
                </header>
                <Outlet/>
            </>
        ),
        children: [
            {
                path: 'cars',
                element: <CarsContainer/>
            },
            {
                path: 'rickAndMorty',
                element: <RickAndMortyContainer/>,
            },
            {
                path: 'rickAndMorty/:page?',
                element: <RickAndMortyContainer/>,
            },
            {
                path: 'rickAndMorty/:page/:episode',
                element: <Characters/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

reportWebVitals();
