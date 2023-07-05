import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const StationsContext = createContext();

function StationsContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [stations, setStations] = useState([])
    const [currStation, setCurrStation] = useState({}); // La estacion activa
    const [currMaterial, setCurrMaterial] = useState({}); // El material activo
    
    const setupApiData = async () => { 
        const response = await fetch('../../assets/stations.json').then(res => res.json());
        setStations(response.stations);
        setIsReady(true);

        let _currStation = response.stations?.find( ele => ele.order === 1);
        setCurrStation(_currStation); 

        let _material = _currStation.materials?.find( ele => ele.order === 1);
        setCurrMaterial(_material);
    }
    
    useEffect(()=>{
        console.info('Se monto el StationsContextProvider');
        setupApiData();
    },[])

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