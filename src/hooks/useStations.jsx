import { useContext } from "react";
import { StationsContext } from "../context/stations";
import { useQuiz } from "./useQuiz";

export const useStations = () =>{
    const context = useContext(StationsContext)
    const {setCurrQuiz, getQuizByStation, resetQuizSend} = useQuiz();

    const getIsReady = () =>{
        return context.isReady;
    }

    const _getCounter = () =>{
        return context.stations?.length;
    }

    const getCurrentStation = ()=>{
        return context.currStation;
    }

    const _getStationByOrder = (order) =>{
        return context.stations?.find( ele => ele.order === order);
    }

    const _setCurrMaterial = (station)=>{
        let _material = station.materials?.find( ele => ele.order === 1);
        context.setCurrMaterial(_material);
    }
    const _setCurrQuiz = (station)=>{
        let _quiz = getQuizByStation(station);
        setCurrQuiz(_quiz);
    }

    const isLastStation = ()=>{
        let currentStation = getCurrentStation();
        if(!currentStation) return false; 

        let idx = currentStation.order + 1; 
        return idx > _getCounter();
    }

    const moveNext = ()=>{
        let currentStation = getCurrentStation();
        let idx = currentStation.order + 1; 
        
        let station;
        
        if(idx > _getCounter()){
            station = currentStation; 
        }else{
            station = _getStationByOrder(idx);
            currentStation.current = false; 
            station.current = true; 
        }    
        context.setCurrStation(station);
        _setCurrMaterial(station);
        _setCurrQuiz(station); // todo esto deberia terno el quiz
        resetQuizSend(); // reset
        return station;
    }

    const movePrev = ()=>{
        let currentStation = getCurrentStation();
        let idx = currentStation.order - 1; 
        
        let station;
        
        if(idx <= 0){
            station = currentStation; 
        }else{
            station = _getStationByOrder(idx);
            currentStation.current = false; 
            station.current = true; 
        }    
        context.setCurrStation(station);
        _setCurrMaterial(station);
        return station;
    }

    return { getIsReady,getCurrentStation, 
        moveNext, movePrev, isLastStation,
    } 
}