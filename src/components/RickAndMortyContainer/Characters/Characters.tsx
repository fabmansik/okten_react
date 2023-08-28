import React, {useEffect} from 'react';
import {useParams} from "react-router";
import Character from "../Character/Character";
import {rmActions} from "../../../redux";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
interface IParams{
    episode?:number
}
const Characters = () => {
    const param:IParams = useParams()
    const dispatch = useAppDispatch()
    const {characters} = useAppSelector(state => state.rm.results.episodes?.find(element=>element.id === param.episode-1))
    const charactersInfo = useAppSelector(state=> state.rm.results.characters)
    let characters_ids:string[] = []

    characters.map((characterURL:string)=> characters_ids.push(`${+characterURL.split('/')[5]}`))
    useEffect(()=>{
        dispatch(rmActions.characters(characters_ids))
    },[])
        return (
            <div>
                {charactersInfo.map(character=><Character key={character.id} character={character}/>)}
            </div>
        );
}

export default Characters;