import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/index";
import Login from "@/components/Login";
import Loading from "@/components/Loading";

export const AuthContext = createContext();


export default function AuthContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        return auth.onIdTokenChanged(async (user)=>{
            if(!user){
                console.log('kullanıcı bulunamadı');
                
                return;
            }

            const token=await user.getIdToken();

          
            console.log('token: '+token);
            console.log('user: '+user);
        })
    },[])

    if (loading) {
        return <Loading type="cubes" color="gray" />
    }

    if (!currentUser) {
        return <Login />
    } else {
        return (
            <AuthContext.Provider value={currentUser}>
                {children}
            </AuthContext.Provider>
        )
    }

}


