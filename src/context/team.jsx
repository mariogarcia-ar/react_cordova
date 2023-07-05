import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TeamContext = createContext();

function TeamContextProvider({children}){
    const [isReady, setIsReady] = useState(false);
    const [team, setTeam] = useState([]);
    const [isTeamReady, setIsTeamReady] = useState(false); // for auth

    const setupApiData = async () => { 
        // const response = await fetch('../../assets/data.json').then(res => res.json());
        // setTeam(response.team);
        setIsReady(true);
    }

    useEffect(()=>{
        console.info('Se monto el TeamContextProvider');
        setupApiData();
    },[])

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