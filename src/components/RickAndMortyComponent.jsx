const RickAndMortyComponent = (props) => {
    const characters=[
        {
        "id":209,
        "name":"Long Sleeved Morty",
        "status":"unknown",
        "species":"Human",
        "type":"",
        "gender":"Male",
        "origin":{"name":"unknown","url":""},
        "location":{"name":"Citadel of Ricks", "url":"https://rickandmortyapi.com/api/location/3"},
        "image":"https://rickandmortyapi.com/api/character/avatar/209.jpeg",
        "episode":["https://rickandmortyapi.com/api/episode/10"],
        "url":"https://rickandmortyapi.com/api/character/209",
        "created":"2017-12-30T14:00:06.755Z"
        },
        {
        "id": 122,
        "name": "Fart",
        "status": "Dead",
        "species": "Alien",
        "type": "Interdimensional gaseous being",
        "gender": "Male",
        "origin": {"name": "unknown", "url": ""},
        "location": {"name": "unknown", "url": ""},
        "image": "https://rickandmortyapi.com/api/character/avatar/122.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/13"],
        "url": "https://rickandmortyapi.com/api/character/122",
        "created": "2017-12-26T17:19:40.474Z"
        },{"id":357,"name":"Tommy's Clone","status":"Alive","species":"Human","type":"Clone","gender":"Male","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/357.jpeg","episode":["https://rickandmortyapi.com/api/episode/30"],"url":"https://rickandmortyapi.com/api/character/357","created":"2018-01-10T18:07:45.541Z"},{"id":653,"name":"Plane Crash Survivor","status":"unknown","species":"Human","type":"","gender":"Female","origin":{"name":"Near-Duplicate Reality","url":"https://rickandmortyapi.com/api/location/104"},"location":{"name":"Near-Duplicate Reality","url":"https://rickandmortyapi.com/api/location/104"},"image":"https://rickandmortyapi.com/api/character/avatar/653.jpeg","episode":["https://rickandmortyapi.com/api/episode/39"],"url":"https://rickandmortyapi.com/api/character/653","created":"2020-08-13T11:16:21.997Z"},{"id":732,"name":"Blazen","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/732.jpeg","episode":["https://rickandmortyapi.com/api/episode/45"],"url":"https://rickandmortyapi.com/api/character/732","created":"2021-10-17T11:59:00.689Z"},{"id":769,"name":"Big Fat rick","status":"unknown","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/769.jpeg","episode":["https://rickandmortyapi.com/api/episode/48"],"url":"https://rickandmortyapi.com/api/character/769","created":"2021-10-25T08:54:36.735Z"}
        ]
    return (

        <div className={"RickAndMortyDiv"}>
            {characters.map(character => (
                <div className={'character'}>
                <p>ID: {character.id}</p>
                <p>Name: {character.name}</p>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <img src={character.image} alt='Фото'/>
                </div>
            ))})
        </div>
    )}
export default RickAndMortyComponent