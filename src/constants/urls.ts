const carsURL = process.env.REACT_APP_CARS_API
const rmURL = process.env.REACT_APP_RM_API
const cars = '/cars'
const episode = '/episode'
const characters = '/character'
const urls = {
    cars: {
        base: cars,
        byId: (id:number) => `${cars}/${id}`
    },
    rm: {
        base: episode,
        byPage: (page:number)=>`${episode}?page=${page}`,
        characters: (data:string[])=>`${characters}/${data}`
    }
}
export {
    carsURL, urls, rmURL
}