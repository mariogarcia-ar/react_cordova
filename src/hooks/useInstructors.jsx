import axios from "axios";
import { useContext } from "react";
import { InstructorsContext } from "../context/instructors";
import { useSystem } from "./useSystem";

export const useInstructors = () =>{
    const context = useContext(InstructorsContext)
    const {getApiData, trace} = useSystem();

    const getIsReady = () =>{
        return context.isReady;
    }

    const initApiData = async (setInstructors, setIsReady) => {
        let url = '../../assets/data.json';
        let key = 'data';

        let resp = await getApiData(key, url);
        setInstructors(resp.instructors);
        setIsReady(true);
    }

    const resetApiData = (setInstructors, setIsReady)=>{
        initApiData(setInstructors, setIsReady)
    }


    const getInstructors = () =>{
        return context.instructors;
    }
    
    const setInstructors = (value) =>{
        context.setInstructors(value);
        trace('useInstructors:setInstructors:setInstructors',value);
    }

    const getInstructorByStarsId = async (stars_id) =>{
        let url = './assets/data.json';
        let key = 'data';

        let resp = await getApiData(key, url);
        const user = resp.instructors.find(ele => ele.stars_id == stars_id);
        return user;
    }

    return { getIsReady, initApiData, resetApiData,
             getInstructors, setInstructors,
             getInstructorByStarsId, }
}
