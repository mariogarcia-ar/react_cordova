import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import InstructorsContextProvider from "./instructors";
import PagesContextProvider from "./pages";
import QuizContextProvider from "./quiz";
import StationsContextProvider from "./stations";
import TeamContextProvider from "./team";
import UserContextProvider from "./user";
import { useSystem } from "../hooks/useSystem";

export const AppContext = createContext();

function AppContextProvider({children}){
    const {getConfig} = useSystem();

    // si cambio, aviso a todos mis hijos.
    const [isReadyApp, setIsReadyApp] = useState(false)
    const [resetSystem, setResetSystem] = useState(0)

    // const [pageTitle, setPageTitle] = useState("Ford Ranger");
    const [jid, setJid] = useState(getConfig('app_jid', -42))
    const [aid, setAid] = useState(getConfig('app_aid', -92))
    const [fecha, setFecha] = useState(getConfig('app_fecha', 'sin-fecha'))//TODO: SACAR?
    const [numLoadedUsers, setNumLoadedUsers] = useState(getConfig('app_numLoadedUsers', 0)); // numLoadedUsers counts TODO: CAMBIAR
    
    
    useEffect(()=>{
        console.info('Se monto el AppContextProvider');
        setIsReadyApp(true); // Raise update: backpropagtion to childs
    },[])

    return (
    <AppContext.Provider value={{
        isReadyApp, 
        resetSystem, setResetSystem,
        jid, setJid,
        aid, setAid,
        fecha, setFecha,
        numLoadedUsers, setNumLoadedUsers,
    }} >
        <PagesContextProvider>
        <TeamContextProvider>
        <UserContextProvider>
            <StationsContextProvider>
            <QuizContextProvider>
                <InstructorsContextProvider>
                                {children} 
                </InstructorsContextProvider>
            </QuizContextProvider>                        
            </StationsContextProvider>                        
        </UserContextProvider>
        </TeamContextProvider>
        </PagesContextProvider>
    </AppContext.Provider>
    )
}

export default AppContextProvider