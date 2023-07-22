import axios from "axios";

export const apiServices = {
    axiosUserPost: (data) => {
        axios.post('https://jsonplaceholder.typicode.com/users',{data})
    },
    axiosCommentPost:  (data) => {
         axios.post('https://jsonplaceholder.typicode.com/comments',{data})
    },
    axiosCarGet:  (set) => {
         axios.get('http://owu.linkpc.net/carsAPI/v1/cars').then(res=>set(res.data))
    },
    axiosCarPost: (data, setReload) => {
        axios.post('http://owu.linkpc.net/carsAPI/v1/cars',data).then(()=>setReload(data))
    },
    axiosCarDelete: (carId, setReload) => {
        axios.delete(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`).then(()=>setReload(carId))
    },
    axiosCarUpdate: (carId, data, setReload) => {
        axios.put(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`,data).then(()=>setReload(data))
    }

}