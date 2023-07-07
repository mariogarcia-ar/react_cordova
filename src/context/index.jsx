import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Loading from "../components/loading";
import InstructorsContextProvider from "./instructors";
import PagesContextProvider from "./pages";
import QuizContextProvider from "./quiz";
import StationsContextProvider from "./stations";
import TeamContextProvider from "./team";
import UserContextProvider from "./user";

export const AppContext = createContext();

function AppContextProvider({children}){
    const [isReady, setIsReady] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [pageTitle, setPageTitle] = useState("Ford Ranger");
    const [jid, setJid] = useState(42)
    const [aid, setAid] = useState(92)
    const [fecha, setFecha] = useState('sin-fecha')
    const [users, setUsers] = useState(0); // users counts
    
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        setIsLoading(true);
        return config;
      }, function (error) {
        setIsLoading(false);
        // Do something with request error
        return Promise.reject(error);
      });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        setIsLoading(false);
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        setIsLoading(false);
        return Promise.reject(error);
    });
    
    useEffect(()=>{
        console.info('Se monto el AppContextProvider');
    },[])

    return (
    <AppContext.Provider value={{
        isReady, pageTitle, setPageTitle,
        jid, setJid,
        aid, setAid,
        fecha, setFecha,
        users, setUsers,
    }} >
        <PagesContextProvider>
        <TeamContextProvider>
        <UserContextProvider>
            <StationsContextProvider>
            <QuizContextProvider>
                <InstructorsContextProvider>
                    {isLoading && <Loading />}
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