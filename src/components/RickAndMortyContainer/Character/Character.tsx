import React, {FC, PropsWithChildren} from 'react';
import {ICharacter} from "../../../interfaces/RMInterfaces";
interface IProps{
    character:ICharacter
}
const Character:FC<PropsWithChildren<IProps>> = ({character}) => {
    const {id, name, image} = character
    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <img src={`${image}`}/>
        </div>
    );
};

export default Character;