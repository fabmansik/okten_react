import {Link} from "react-router-dom";

export const NavbarComponent = ({links}) => {
    return(
        <header style={{zIndex: '2', height:'10vh', top:'0px', width: '100%', position: 'fixed', display: 'flex', background: 'darkslategrey', justifyContent: "space-around", alignItems: "center"}}>
            {links.map(link=>(<Link to={link} key={link}>{link}</Link>))}
        </header>
    )
}