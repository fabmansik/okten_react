import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Character from "../Character/Character";
import {rmActions} from "../../../redux";

const Characters = () => {
    const param = useParams()
    const dispatch = useDispatch()

    const {characters} = useSelector(state => state.rm.results.find(element=>element.id === param.episode-1))
    const charactersInfo = useSelector(state=> state.rm.characters)

    let characters_ids = []
    characters.map(characterURL=> characters_ids.push(+characterURL.split('/')[5]))

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