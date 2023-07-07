import { useContext } from "react";
import { AppContext } from "../context";
import { useAxiosCustom } from "./useAxiosCustom";
import localForage from "localforage";

export const useApp = () =>{
    const context = useContext(AppContext)
    const {callApi} = useAxiosCustom();

    const _setupApiData =  async () =>{
        localForage.getItem('users').then(res=>{
            context.setUsers(res.length);
        })
        callApi("/setup").then(res =>{
            context.setJid(res.jid);
            context.setAid(res.aid);
            context.setFecha(res._current_date);
            console.log(res);
        })
    }

    const syncUsers =  async () =>{
        callApi("/users").then(res =>{
            context.setUsers(res.length); // no se si la banque el contexto tener tantos usuarios

            localForage.setItem('users', res);
        })
    }

    const getIsReady = () =>{
        return context.isReady;
    }

    const getPageTitle = ()=>{
        return context.pageTitle;
    }

    const setPageTitle = (value)=>{
        context.setPageTitle(value);
    }

    const getJid = ()=>{
        return context.jid;
    }

    const setJid = (value)=>{
        context.setJid(value);
    }

    const getAid = ()=>{
        return context.aid;
    }

    const setAid = (value)=>{
        context.setAid(value);
    }

    const getFecha = ()=>{
        return context.fecha;
    }

    const setFecha = (value)=>{
        context.setFecha(value);
    }

    const getUsersCount = ()=>{
        return context.users;
    }

    const getUserByStarsId = async (id)=>{
        const users = await localForage.getItem('users');
        const user = users.filter( (u) => u.stars_id == id);        
        return user?user[0]:null;
    }

    const setUsers = (value)=>{
        // context.setUsers(value);
    }
    
    
    return { getIsReady, _setupApiData,
             getPageTitle, setPageTitle,
             getJid, setJid,
             getAid, setAid,
             getFecha, setFecha, 
             getUsersCount, setUsers, syncUsers, getUserByStarsId}
}
