import './spaceX.css'
export const SpaceXComponent = (props) =>{
    const {launch} = props;
    console.log(launch)
    return(
        <>
            <div id={launch.flight_number} className={'launch_info'}>
                <div className={'info'}>
                    <h3>Mission name:</h3>
                    <p>{launch.mission_name}</p>
                    <h3>Launch year:</h3>
                    <p>{launch.launch_year}</p>
                </div>
                <img src={launch.links.mission_patch_small}/>
            </div>
        </>
    )
}