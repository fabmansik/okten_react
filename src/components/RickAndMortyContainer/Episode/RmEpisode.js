import React from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router";

const RmEpisode = ({ep}) => {
    const params = useParams()
    console.log(ep)
    const {id, name, episode} = ep
    return (
        <Link to={params?.page? `${id+1}` : `1/${id+1}`}>
            <div className={'episode'}>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Episode: {episode}</p>
            </div>
        </Link>
    );
};

export default RmEpisode;