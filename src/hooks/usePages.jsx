import { useContext } from "react";
import { PagesContext } from "../context/pages";
import { useSystem } from "./useSystem";

export const usePages = () =>{
    const context = useContext(PagesContext)
    const {getApiData} = useSystem();

    const getIsReady = () =>{
        return context.isReady;
    }
    const initApiData = async (setPages, setIsReady) => {
        console.log('usePages: initApiData')
        let url = '../../assets/data.json';
        let key = 'data';

        let resp = await getApiData(key, url);
        setPages(resp.pages);
        setIsReady(true);
    }

    const resetApiData = async (setPages, setIsReady) => {
        initApiData(setPages, setIsReady);
    }
        
    const getPages = () =>{
        return context.pages;
    }
    
    const setPages = (value) =>{
        context.setPages(value);
    }

    const getPageById = (id) =>{
        return context.pages.find(ele => ele.id === id)
    }

    return { getIsReady, initApiData, resetApiData,
             getPages, setPages,
             getPageById, }
}
