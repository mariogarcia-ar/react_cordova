import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PagesContext = createContext();

function PagesContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [pages, setPages] = useState([])

    const setupApiData = async () => {
        const response = await fetch('../../assets/data.json').then(res => res.json());
        setPages(response.pages);
        setIsReady(true);
    }

    useEffect(()=>{
        console.info('Se monto el PagesContextProvider');
        setupApiData();
    },[])

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