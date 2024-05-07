import {useEffect, useState} from "react";

const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage)
  }, []);

  return token
}

export default useToken
