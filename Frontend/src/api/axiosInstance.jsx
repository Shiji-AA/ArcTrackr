import axios from "axios"

const axiosInstanceAdmin = axios.create({
    baseURL:`${import.meta.env.VITE_PUBLIC_API_URL}/api/admin`
     //baseURL: "https://castme-project-1.onrender.com/api/admin",
  
})

export { axiosInstanceAdmin};