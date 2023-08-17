const carsURL = process.env.REACT_APP_CARS_API
const rmURL = process.env.REACT_APP_RM_API
const cars = '/cars'
const episode = '/episode'
const characters = '/character'
const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    },
    rm: {
        base: episode,
        byPage: (page)=>`${episode}?page=${page}`,
        characters: (data)=>`${characters}/${data}`
    }
}
export {
    carsURL, urls, rmURL
}