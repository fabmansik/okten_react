import React, {useEffect} from 'react';
import {rmActions} from "../../../redux";
import RmEpisode from "../Episode/RmEpisode";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";

const RickAndMortyContainer = () => {
    const params = useParams()
    const {results, info} = useAppSelector(state => state.rm)
    const dispatch = useAppDispatch();
    useEffect(() => {
        (params.page !== undefined && +params.page > 0 && +params.page <= info.pages) ?
            dispatch(rmActions.pageEpisodes(+params.page)) : dispatch(rmActions.episodes())
    }, [params.page])
    return (
        <div>
            <div className={'episode-list'}>
                {results.episodes.map((ep) => <RmEpisode key={ep.id} ep={ep}/>)}
            </div>

            <Link to={`/rickAndMorty/${!params.page?'': +params.page === 1? 1: +params.page-1}`}>
                <button>previous</button>
            </Link>
            <Link to={`/rickAndMorty/${!params.page? 2 : +params.page ===3? 3 : +params.page+1}`}>
                <button>next</button>
            </Link>
        </div>
    );
};

export default RickAndMortyContainer;