import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AppContext } from ".";
import { usePages } from "../hooks/usePages";

export const PagesContext = createContext();

function PagesContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [pages, setPages] = useState([])

    // trigger when the AppContext is ready
    const contextApp = useContext(AppContext)
    const {initApiData, resetApiData} = usePages();
    useEffect(()=>{
        if(contextApp.isReadyApp){
            console.info('isReadyApp: Se monto el PagesContextProvider');
            initApiData(setPages, setIsReady);
        }
    },[contextApp.isReadyApp])

    useEffect(()=>{
        if(contextApp.resetSystem){
            console.info('resetApiData: Se reseteo el PagesContextProvider');
            resetApiData(setPages, setIsReady);
        }
    },[contextApp.resetSystem])

    return (
        <PagesContext.Provider value={{
            isReady,  
            pages, setPages, 
        }} >
            {children}
        </PagesContext.Provider>
    )
}

export default PagesContextProvider