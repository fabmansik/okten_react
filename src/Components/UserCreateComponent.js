import {useRef} from "react";

export const UserCreateComponent = () => {

    const id = useRef('')
    const name = useRef('')
    const username = useRef('')
    const email = useRef('')
    const street = useRef('')
    const suite = useRef('')
    const city = useRef('')
    const zipcode = useRef('')
    const lat = useRef('')
    const lng = useRef('')
    const phone = useRef('')
    const website = useRef('')
    const company_name = useRef('')
    const catchPhrase = useRef('')
    const bs = useRef('')

    const createUser = async () =>{
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    id: id.current.value,
                    name: name.current.value,
                    username: username.current.value,
                    email: email.current.value,
                    address: {
                        street: street.current.value,
                        suite: suite.current.value,
                        city: city.current.value,
                        zipcode: zipcode.current.value,
                        geo: {
                            lat: lat.current.value,
                            lng: lng.current.value,
                        }
                    },
                    phone: phone.current.value,
                    website: website.current.value,
                    company: {
                        name: company_name.current.value,
                        catchPhrase: catchPhrase.current.value,
                        bs: bs.current.value,
                    }
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            const response = await data.json();
            console.log(response)
        } catch (e) {
            console.log("No connection to API")
        }

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        createUser()

    }
    return(
            <form onSubmit={handleSubmit}>
                <h3>User Details:</h3>
                <label>ID:</label>
                <input type="number" ref={id}></input>
                <label>Name:</label>
                <input type="text" ref={name}></input>
                <label>Username:</label>
                <input type="text" ref={username}></input>
                <label>Email:</label>
                <input type="email" ref={email}></input>
                <label>Phone:</label>
                <input type="number" ref={phone}></input>
                <label>Website:</label>
                <input type="text" ref={website}></input>
                <h3>Address:</h3>
                <label>City:</label>
                <input type="text" ref={city}></input>
                <label>Street:</label>
                <input type="text" ref={street}></input>
                <label>Suite:</label>
                <input type="text" ref={suite}></input>
                <label>Zipcode:</label>
                <input type="number" ref={zipcode}></input>
                <h3>Geo:</h3>
                <label>Lat:</label>
                <input type="number" ref={lat}></input>
                <label>Lng:</label>
                <input type="number" ref={lng}></input>
                <h3>Company:</h3>
                <label>Name:</label>
                <input type="text" ref={company_name}></input>
                <label>catchPhrase:</label>
                <input type="text" ref={catchPhrase}></input>
                <label>bs:</label>
                <input type="text" ref={bs}></input>
                <button type="submit">Send user</button>
            </form>
    )
}