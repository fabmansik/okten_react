import {useState} from "react";

export const CarForm = ({setOnSave}) =>{
    const InitialState ={
        brand: '',
        price: '',
        year:'',
    }

    const [car, setCar] = useState(InitialState)
    const carsPost = async () =>{

        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`,{
            method:'POST',
            body: JSON.stringify(car),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(()=>{
                setOnSave(prevState => !prevState)
                setCar(InitialState)})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        carsPost()
    }
    const inputHandle = (e) =>{
        setCar(prev=>({...prev, [e.target.name]:e.target.value}))
    }
return(
    <div className="carForm">
        <form onSubmit={handleSubmit}>
            <label>Brand:</label>
            <input type='text' value={car.brand} name='brand' pattern="^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$" onChange={inputHandle}></input>
            <label>Price:</label>
            <input type='number' value={car.price} name='price' onChange={inputHandle}></input>
            <label>Year:"</label>
            <input type='number' value={car.year} name='year' onChange={inputHandle}></input>
            <button type='submit'>Post</button>
        </form>
    </div>
)
}