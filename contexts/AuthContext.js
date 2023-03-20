import { createContext, useEffect} from "react";
import { auth } from "../firebase/index";

export const AuthContext = createContext();


export default function AuthContextProvider({children}) {

    useEffect(()=>{

        return auth.onIdTokenChanged(async(user)=>{
            if(!user){
                console.log('kullanıcı bulunamadı');
                return;
            }
            const token = await user.getIdToken();

            console.log('token:' +token);
            console.log('user:' +user);
        })

    },[])

}


