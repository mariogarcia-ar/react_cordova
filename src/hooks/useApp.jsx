import { useContext } from "react";
import { AppContext } from "../context";
import { useSystem } from "./useSystem";

export const useApp = () =>{
    const context = useContext(AppContext)

    const {getFordAcademyApiData, setConfig, getConfig, setLocalStorage, getLocalStorage} = useSystem();

    const _setupApiData =  async () =>{
        const key = 'fa_setup';
        const url = '/setup';

        getFordAcademyApiData(key, url, true).then(res=>{
            context.setJid(setConfig('app_jid', res.jid)); // update view
            context.setAid(setConfig('app_aid', res.aid)); // update view
            context.setFecha(setConfig('app_fecha', res._current_date)); // update view
        })
        return true;
    }

    const resetSystem = (resetCache)=>{
        if(resetCache){
            let fa_setup = getLocalStorage('fa_setup',[]);
            let fa_users = getLocalStorage('fa_users',[]);
            let stations = getLocalStorage('stations',[]);
            let station_layout = getLocalStorage('station_layout',[]);
            
            localStorage. clear();
            
            setLocalStorage('fa_users',fa_users);
            setLocalStorage('fa_setup',fa_setup);
            setLocalStorage('stations',stations);
            setLocalStorage('station_layout',station_layout);

            // _setupApiData(); //TODO: REVISAR SIN CONEXION
        }
        context.setResetSystem( context.resetSystem + 1); //trigger reset childs
    }

    const syncUsers =  async () =>{
        const key = 'fa_users';
        const url = '/users';

        getFordAcademyApiData(key, url, true).then(res=>{
            context.setNumLoadedUsers(setConfig('app_numLoadedUsers', res.length));
        })
    }

    const getIsReady = () =>{
        return context.isReady;
    }

    const getPageTitle = ()=>{
        return getConfig('app_pageTitle', 'P703 FORD Academy'); //context.pageTitle;
    }

    const setPageTitle = (value)=>{
        setConfig('app_pageTitle', value); //context.pageTitle;
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
        return context.numLoadedUsers;
    }

    const getUserByStarsId = async (id)=>{
        const users = await getLocalStorage('fa_users');
        const user = users.filter( (u) => u.stars_id == id);        
        return user?user[0]:null;
    }
    
    return { getIsReady, _setupApiData, resetSystem,
             getPageTitle, setPageTitle,
             getJid, setJid,
             getAid, setAid,
             getFecha, setFecha, 
             getUsersCount, syncUsers, getUserByStarsId}
}
