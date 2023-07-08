import { useContext } from "react";
// import localForage from "localforage";
import { useAxiosCustom } from "./useAxiosCustom";

export const useSystem = () =>{
    const {callApi} = useAxiosCustom();

    const setLocalStorage = (key, value)=>{
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    const getLocalStorage = (key, value)=>{
        var data = localStorage.getItem(key);
        if (typeof data !== 'undefined') {
            data = JSON.parse(data);
            return data;
        }else{
            setLocalStorage(key, value)
            return value
        }
    }

    const setConfig = (key, value) =>{
        setLocalStorage(key, value);
        /*console.warn*/ console.log('setConfig:', key, value);
        return value;
    }

    const getConfig = (key, value) =>{
        const data = getLocalStorage(key);
        if(data) {
            /*console.warn*/ console.log('localstorage: getConfig', key, value, data);
            return data;
        }
        
        // default
        /*console.warn*/ console.log('default: getConfig', key,value);
        setLocalStorage(key, value);
        return value;
    }

    const getApiData = async (key, url, force)=>{
        if(!force){
            // local storage
            const data = await getLocalStorage(key);
            if(data){
                /*console.warn*/ console.log('localstorage: getApiData', key, url);
                return data; 
            } 
        }

        // api call
        /*console.warn*/ console.log('ajax: getApiData', key, url);
        const response = await fetch(url).then(res => res.json());
        setLocalStorage(key, response);
        return response;        
    }

    const getFordAcademyApiData = async (key, url, force)=>{
        if(!force){
            // local storage
            const data = await getLocalStorage(key);
            if(data){
                /*console.warn*/ console.log('localstorage: getFordAcademyApiData', key, url);
                return data; 
            } 
        }

        // api call
        /*console.warn*/ console.log('ajax: getFordAcademyApiData', key, url);
        const response = await callApi(url);
        setLocalStorage(key, response);
        return response;        
    }    

    return { getConfig, setConfig, 
            setLocalStorage, getLocalStorage,
            getApiData, getFordAcademyApiData }
}
