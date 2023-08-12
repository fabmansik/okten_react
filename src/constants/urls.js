const baseUrl = process.env.REACT_APP_API
const cars = '/cars'
const urls = {
    cars:{
        base:cars,
        byId:(id)=>`${cars}/${id}`
    }
}
export {
    baseUrl, urls
}