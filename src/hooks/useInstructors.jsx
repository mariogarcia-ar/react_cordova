import axios from "axios";
import { useContext } from "react";
import { InstructorsContext } from "../context/instructors";

export const useInstructors = () =>{
    const context = useContext(InstructorsContext)

    const getIsReady = () =>{
        return context.isReady;
    }

    const getInstructors = () =>{
        return context.instructors;
    }
    
    const setInstructors = (value) =>{
        context.setInstructors(value);
    }

    const getInstructorByStarsId = (stars_id) =>{
        const url = "./assets/data.json";
        return axios.get(url).then( res =>{
            const user = res.data.instructors.find(ele => ele.stars_id == stars_id);
            return user;
        })
    }

    return { getIsReady,  
             getInstructors, setInstructors,
             getInstructorByStarsId, }
}
