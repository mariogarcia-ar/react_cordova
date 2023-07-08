import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AppContext } from ".";
import { useTeam } from "../hooks/useTeam";

export const TeamContext = createContext();

function TeamContextProvider({children}){
    const [isReady, setIsReady] = useState(false);
    const [team, setTeam] = useState([]);
    const [isTeamReady, setIsTeamReady] = useState(false); // for auth
    
    // trigger when the AppContext is ready
    const contextApp = useContext(AppContext)
    const {initApiData, resetApiData} = useTeam();
    useEffect(()=>{
        if(contextApp.isReadyApp){
            console.info('isReadyApp: Se monto el TeamContextProvider');
            initApiData(setIsReady,setIsTeamReady);
        }
    },[contextApp.isReadyApp])
    
    useEffect(()=>{
        if(contextApp.resetSystem){
            console.info('resetApiData: Se reseteo el TeamContextProvider');
            resetApiData(setTeam, setIsTeamReady);
        }
    },[contextApp.resetSystem])


    return (
        <TeamContext.Provider value={{
            isReady, setIsReady,
            team, setTeam,
            isTeamReady, setIsTeamReady,
        }} >
            {children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider