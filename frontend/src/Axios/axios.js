import axios from "axios"
const instance = axios.create({
    baseURL:"https://newtodo-6h9i.onrender.com/"
})
export default instance