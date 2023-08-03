import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter, Link, Outlet,
    RouterProvider,
} from "react-router-dom";
import {CarClassComponent} from "./ClassComponents/CarClassComponent";
import {PostClassComponent} from "./ClassComponents/PostClassComponent";
import {CommentsClassComponent} from "./ClassComponents/CommentsClassComponent";
const AppLayout = () =>{
    return(
        <>
            <header style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'gray', color:'white'}}>
                <Link to='/cars' style={{color:"white", textDecoration:'none'}}>Cars</Link>
                <Link to='/posts' style={{color:"white", textDecoration:'none'}}>Posts</Link>
                <Link to='/comments' style={{color:"white", textDecoration:'none'}}>comments</Link>
            </header>
            <Outlet/>
        </>

        )


}
const router = createBrowserRouter([
    {
        path: "",
        element: <AppLayout/>,
        children: [
            {
                path: '/cars',
                element: <CarClassComponent/>
            },
            {
                path: '/posts',
                element: <PostClassComponent/>
            },
            {
                path: '/comments',
                element: <CommentsClassComponent/>
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

reportWebVitals();
