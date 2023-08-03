import React from "react";
export class CarClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            cars:[]
        }
    }
    handleFetch(){
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`).then(res=>res.json()).then(res=> {
            this.setState({cars: res})
        })
    }
    handlePostFetch(){
    }
    componentDidMount() {
        this.handleFetch()
    }

    render() {
        return(
            <div>
                {this.state.cars.map(car=><div className={'car'} key={car.id}>
                    <p>ID: {car.id}</p>
                    <p>Brand: {car.brand}</p>
                    <p>Price: {car.price}</p>
                    <p>Year: {car.year}</p>
                    <br/>
                </div>)}
            </div>
        )
    }
}