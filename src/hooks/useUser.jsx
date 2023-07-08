import { useContext } from "react";
import { UserContext } from "../context/user";
import { useApp } from "./useApp";
import { useAxiosCustom } from "./useAxiosCustom";
import { useSystem } from "./useSystem";

export const useUser = () =>{
    const context = useContext(UserContext);
    const {callApi} = useAxiosCustom();
    const {getJid, getFordAcademyApiData} = useApp();

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

    const getUserByStarsId = async (stars_id) =>{
        //TODO: refactorizar a un metodo con mejor nombre
        // return callApi("/users/"+stars_id+'/enrolled/'+getJid());     

        const key = 'fa_users_enrolled';
        const url = "/users/"+stars_id+'/enrolled/'+getJid();

        const res = await getFordAcademyApiData(key, url, true);
        return res;
    }

    return { getIsReady,  
             isUserLogued, setUser,
             getUserByStarsId, getUser }
  
}
