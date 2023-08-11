import {actions} from "../ReduxCore/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
export const RickAndMortyComponent = () => {
    const dispatch = useDispatch()
    const characters = useSelector((store) => store.rickAndMorty.results)
    const info = useSelector(store=>store.rickAndMorty.info)
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character").then(res=>res.json())
            .then(res=>dispatch(actions.setCharacters(res)))
    },[])
    console.log(info)
    const getMore = () =>{
        fetch(info.next).then(res=>res.json())
            .then(res=>dispatch(actions.addCharacters(res)))
    }
    return(
        <div>
            {info.next}
            <br/>
            <button onClick={getMore}>next</button>
            {characters.map(character => <p>{character.name}</p>)}
        </div>

    )
}