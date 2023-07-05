import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false)

    useEffect(()=>{
        console.info('Se monto el UserContextProvider');
    },[])

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
