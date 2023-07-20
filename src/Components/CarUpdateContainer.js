import {useState} from "react";

export const CarUpdateContainer = ({setShowUpdate, car, setOnSave}) => {
    const {brand, price, year, id} = car
    const InitialState = {brand:'',price:'',year:''}
    const [newCar, setNewCar] = useState(InitialState)
    const CarUpdate = async (id) =>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
            method: "PUT",
            body: JSON.stringify({
                brand: newCar.brand || brand,
                price: newCar.price || price,
                year: newCar.year || year,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }}
            ).then(()=>setOnSave(true))
    }
    const handleChange =(e)=>{
        setNewCar(prevState => ({...prevState, [e.target.name]:e.target.value}))
    }
  return(
      <div>
          <form>
              <label>New Brand:</label>
              <input placeholder={brand} onChange={handleChange} name='brand'></input>
              <label>New Price:</label>
              <input placeholder={price} onChange={handleChange} name='price'></input>
              <label>New Year:</label>
              <input placeholder={year} onChange={handleChange} name='year'></input>
              <button onClick={(e)=>{CarUpdate(id); e.preventDefault()}}>Change</button>
              <button onClick={(e)=>{setShowUpdate(false); e.preventDefault()}}>Hide</button>
          </form>
      </div>
  )
}