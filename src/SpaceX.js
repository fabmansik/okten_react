import {useEffect, useState} from "react";
import {SpaceXComponent} from "./SpaceXComponent";
export const SpaceX = () =>{
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res=> res.json())
            .then((launches)=>setLaunches(launches))
    },[])
    return(
        <>
            {launches
                .filter(launch => launch.launch_year !== "2020")
                .map((launch, flight_number)=>{
                return <SpaceXComponent key={flight_number} launch={launch}/>
            })}

        </>)

}