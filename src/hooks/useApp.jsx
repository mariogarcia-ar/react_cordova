import { useContext } from "react";
import { AppContext } from "../context";
import { useAxiosCustom } from "./useAxiosCustom";

export const useApp = () =>{
    const context = useContext(AppContext)
    const {callApi} = useAxiosCustom();

    const _setupApiData =  async () =>{
        callApi("/setup").then(res =>{
            context.setJid(res.jid);
            context.setAid(res.aid);
            context.setFecha(res._current_date);
            console.log(res);
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

    return { getIsReady, _setupApiData,
             getPageTitle, setPageTitle,
             getJid, setJid,
             getAid, setAid,
             getFecha, setFecha, }
}
