import axios from "axios";

// GLOBAL CONFIG FOR AXIOS

const BASE_HOST = "https://vtask-api.foxcoding.org"

const axiosClient = axios.create(
    {
      baseURL: BASE_HOST
    }
)

export default axiosClient
