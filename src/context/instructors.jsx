import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const InstructorsContext = createContext();

function InstructorsContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [instructors, setInstructors] = useState([])

    const setupApiData = async () => {
        const response = await fetch('../../assets/data.json').then(res => res.json());
        setInstructors(response.instructors);
        setIsReady(true);
    }

    useEffect(()=>{
        console.info('Se monto el InstructorsContextProvider');
        setupApiData();
    },[])

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