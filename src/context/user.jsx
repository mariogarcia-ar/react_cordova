import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AppContext } from ".";

export const UserContext = createContext();

function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false)

    // trigger when the AppContext is ready
    const contextApp = useContext(AppContext)
    useEffect(()=>{
        if(contextApp.isReadyApp)
            console.info('isReadyApp: Se monto el UserContextProvider');
    },[contextApp.isReadyApp])

    useEffect(()=>{
        if(contextApp.resetSystem){
            console.info('resetApiData: Se reseteo el UserContextProvider');
            // resetApiData(setTeam);
        }
    },[contextApp.resetSystem])

    return (
        <UserContext.Provider value={{
            user, setUser,
            isReady,  
        }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
