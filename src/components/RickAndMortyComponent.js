import {actions} from "../ReduxCore/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
export const RickAndMortyComponent = () => {
    const dispatch = useDispatch()
    const characters = useSelector((store) => store.rickAndMorty.results)
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character").then(res=>res.json())
            .then(res=>dispatch(actions.setCharacters(res)))
    },[])
    return(
        characters.map(character=><p>{character.name}</p>)
    )
}