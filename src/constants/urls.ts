const carsURL = process.env.REACT_APP_CARS_API
const rmURL = process.env.REACT_APP_RM_API
const cars = '/cars'
const auth = '/auth'
const users = '/users'
const urls = {
    cars: {
        base: (opt?:string|void) => `${cars}${opt? '?'+opt: ''}`,
        byId: (id:number) => `${cars}/${id}`,
        photo: (id:number):string =>`${cars}/${id}/photo`
    },
    auth:{
        login: auth,
        refresh : `${auth}/refresh`,
        register: users,
        me:`${auth}/me`
    }
}
export {
    carsURL, urls, rmURL
}