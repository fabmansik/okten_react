import {Link, Navigate, Outlet} from "react-router-dom";
import {UserInfoComponent} from "./UserInfoComponent";

export const HeaderComponent = () => {
    return(
        <header>
            <img className='logo-img' src='/Logo.png' onClick={()=><Link to="/"/>}></img>
            <img className='menu-img' src='/menu.png'></img>
            <div className='search'>
                <input type='text'></input><img className='shape-img' src='/shape.png'></img>
            </div>
            <UserInfoComponent/>
        </header>
    )
}