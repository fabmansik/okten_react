export const UserAddress = ({address}) =>{
    const {street, suite, city, zipcode, geo} = address;
    return(
        <div className={'UserAddress'}>
            <h3>User Address</h3>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipcode}</p>
            <p>Geo: lat:{geo.lat}, lng:{geo.lng}</p>
        </div>
    )
}