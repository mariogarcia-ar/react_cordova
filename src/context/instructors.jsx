import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AppContext } from ".";
import { useInstructors } from "../hooks/useInstructors";

export const InstructorsContext = createContext();

function InstructorsContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [instructors, setInstructors] = useState([])
    
    // trigger when the AppContext is ready
    const contextApp = useContext(AppContext)
    const {initApiData, resetApiData} = useInstructors();
    useEffect(()=>{
        if(contextApp.isReadyApp){
            console.info('isReadyApp: Se monto el InstructorsContextProvider');
            initApiData(setInstructors, setIsReady);
        }
    },[contextApp.isReadyApp])

    useEffect(()=>{
        if(contextApp.resetSystem){
            console.info('resetApiData: Se reseteo el InstructorsContextProvider');
            resetApiData(setInstructors, setIsReady);
        }
    },[contextApp.resetSystem])

    return (
        <InstructorsContext.Provider value={{
            isReady,  
            instructors, setInstructors, 
        }} >
            {children}
        </InstructorsContext.Provider>
    )
}

export default InstructorsContextProvider