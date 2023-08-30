import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import {
    createBrowserRouter,
    RouterProvider, Outlet,
} from "react-router-dom";
import CarsContainer from "./pages/CarsContainer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header/>
                <Outlet/>
            </>
        ),
        children: [
            {
                path: 'cars',
                element: <CarsContainer/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
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
export {
    router
}

reportWebVitals();
