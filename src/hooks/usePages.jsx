import { useContext } from "react";
import { PagesContext } from "../context/pages";

export const usePages = () =>{
    const context = useContext(PagesContext)

    const getIsReady = () =>{
        return context.isReady;
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

    return { getIsReady,  
             getPages, setPages,
             getPageById, }
}
