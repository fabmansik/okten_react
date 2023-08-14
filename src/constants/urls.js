const baseURL = process.env.REACT_APP_API_URL
const cars = '/cars'
const urls = {
    cars:{
        base:baseURL+cars,
        byId:(id)=>`${cars}/${id}`
    }
}
export {
    baseURL, urls
}