import { useContext } from "react";
import { UserContext } from "../context/user";
import { useApp } from "./useApp";
import { useAxiosCustom } from "./useAxiosCustom";

export const useUser = () =>{
    const context = useContext(UserContext);
    const {callApi} = useAxiosCustom();
    const {getJid} = useApp();

    const getIsReady = () =>{
        return context.isReady;
    }

    const setUser = (user)=>{
        context.setUser(user);
    }

    const isUserLogued = ()=>{
        return !!context.user;
    }

    const getUser = ()=>{
        return context.user;
    }

    const getUserByStarsId = (stars_id) =>{
        //TODO: refactorizar a un metodo con mejor nombre
        return callApi("/users/"+stars_id+'/enrolled/'+getJid());        
    }

    return { getIsReady,  
             isUserLogued, setUser,
             getUserByStarsId, getUser }
  
}
