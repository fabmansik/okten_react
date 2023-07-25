import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {NavbarComponent} from "./components/NavbarComponent";
import {TodosComponent} from "./components/TodosComponent";
import {WelcomeComponent} from "./components/WelcomeComponent";
import {AlbumsComponent} from "./components/AlbumsComponent";
import {CommentsComponent} from "./components/CommentsComponent";
const links = ['todos','albums','comments']
const AppLayout = () =>(
    <>
        <NavbarComponent links={links}/>
        <Outlet/>
    </>
)
const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <WelcomeComponent/>,
            },
            {
                path: '/todos',
                element: <TodosComponent/>
            },
            {
                path: '/albums',
                element: <AlbumsComponent/>
            },
            {
                path: '/comments',
                element: <CommentsComponent/>
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

reportWebVitals();
