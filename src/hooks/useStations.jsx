import { useContext } from "react";
import { StationsContext } from "../context/stations";
import { useQuiz } from "./useQuiz";
import { useSystem } from "./useSystem";

export const useStations = () =>{
    const context = useContext(StationsContext)
    const {setCurrQuiz, getQuizByStation, resetQuizSend} = useQuiz();
    const {getApiData} = useSystem();


    const getIsReady = () =>{
        return context.isReady;
    }

    const initApiData = async (setStations,setIsReady,setCurrStation,setCurrMaterial) => { 
        console.log('useStations: initApiData')
        let url = '../../assets/stations.json';
        let key = 'stations';

        let resp = await getApiData(key, url);
        setStations(resp.stations);
        setIsReady(true);

        let _currStation = resp.stations?.find( ele => ele.order === 1);
        setCurrStation(_currStation); 

        let _material = _currStation.materials?.find( ele => ele.order === 1);
        setCurrMaterial(_material);
    }
    
    const resetApiData = async (setStations,setIsReady,setCurrStation,setCurrMaterial) => { 
        initApiData(setStations,setIsReady,setCurrStation,setCurrMaterial);
    }
    const _getCounter = () =>{
        return context.stations?.length;
    }

    const getCurrentStation = ()=>{
        return context.currStation;
    }

    const getListStations = ()=>{
        let stations = Array(context.stations).fill(0)
        for( const [idx, e] of (context.stations).entries()){ 
            const title = e.title.substring(0, e.title.indexOf("["));
            const item = {key:e.order, name:title, id:e.id, title:title, order:e.order};
            stations[idx] = item;
        }
        return stations;
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

    return { getIsReady, initApiData, resetApiData, getCurrentStation, 
        moveNext, movePrev, isLastStation, getListStations,
    } 
}