import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AppContext = createContext()

const AppContextProvider = (props)=>{
  const navigate = useNavigate()
    const [user,setUser] = useState(null);
    const [showlogin,setShowlogin] = useState(false);
    const [token,setToken] = useState(localStorage.getItem("token") || null);
    const[credit,setCredit] = useState(false);
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    async function loadCredit(){
        const response = await axios.post(`${backendURL}/api/user/credits`,{},{
            headers:{
                token
            }
        });
        const data = response.data;
        setCredit(data.credits);
        return data.credits

    }
     
    async function genImage(prompt){
              try {
                 const currentCredit = await loadCredit()
                if(currentCredit <= 0 ){
          toast.error("Not enough credits");
                 navigate('/buy');
                }
                const response = await axios.post(`${backendURL}/api/image/generate-image`,{prompt},{headers:{token}});
                const data = response.data;
                
                if(data.message == "Request failed with status code 422"){
                    toast.error("Invalid prompt")
                }
                loadCredit();
                return data.resultImage;
              } catch (error) {
                toast.error(data.message);

              }
    }

   function logout(){
    localStorage.removeItem('token');
    setToken('')
   }
    useEffect(()=>{
        if(token){
loadCredit()
        }
     
    },[token])
    const value ={
        user,setUser,
        showlogin,setShowlogin,backendURL,
        token,setToken,
        credit,setCredit,logout,genImage
    }
return(
    <AppContext.Provider value={value}>
{
    props.children
}
    </AppContext.Provider>
)
}
export default AppContextProvider;