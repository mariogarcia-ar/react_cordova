import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AppContext } from ".";
import { useStations } from "../hooks/useStations";

export const StationsContext = createContext();

function StationsContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [stations, setStations] = useState([])
    const [currStation, setCurrStation] = useState({}); // La estacion activa
    const [currMaterial, setCurrMaterial] = useState({}); // El material activo
    
    // trigger when the AppContext is ready
    const contextApp = useContext(AppContext)
    const {initApiData, resetApiData} = useStations();
    useEffect(()=>{
        if(contextApp.isReadyApp){
            console.info('isReadyApp: Se monto el StationsContextProvider');
            initApiData(setStations,setIsReady,setCurrStation,setCurrMaterial);
        }
    },[contextApp.isReadyApp])

    useEffect(()=>{
        if(contextApp.resetSystem){
            console.info('resetApiData: Se reseteo el StationsContextProvider');
            resetApiData(setStations,setIsReady,setCurrStation,setCurrMaterial);
        }
    },[contextApp.resetSystem])

    return (
        <StationsContext.Provider value={{
            isReady,  
            stations, setStations,
            currStation, setCurrStation,
            currMaterial, setCurrMaterial
        }} >
            {children}
        </StationsContext.Provider>
    )
}

export default StationsContextProvider