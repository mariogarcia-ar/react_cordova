// import { useContext } from "react";
// import { StationContext } from "../context/station";
import { useContext } from "react";
import { StationsContext } from "../context/stations";
import { useStations } from "./useStations";
import { useSystem } from "./useSystem";

export const useStation = () =>{
    const context = useContext(StationsContext)
    const {getCurrentStation} = useStations();
    const {trace} = useSystem();


    const getStationMaterials = ()=>{ //TODO: VER DE PONER MEJOR NOMBRE
        return getCurrentStation()?.materials.sort((a,b) => a.order > b.order ? 1: -1);
    }

    const getCurrMaterial = ()=>{
        return context.currMaterial;
    }
    
    const setCurrMaterial = (value)=>{
        context.setCurrMaterial(value)
        trace('useStation:setCurrMaterial:setCurrMaterial', value);

    } 
    
    const _getCounter = () =>{
        return getStationMaterials()?.length;
    }

    const _getMaterialByOrder = (order) =>{
        return getStationMaterials()?.find( ele => ele.order === order);
    }

    const moveNextMaterial = ()=>{
        let currentMaterial = getCurrMaterial();
        let idx = currentMaterial.order + 1; 
        
        let material;
        
        if(idx > _getCounter()){
            material = currentMaterial; 
        }else{
            material = _getMaterialByOrder(idx);
            currentMaterial.active = false;
            material.active = true; 
        }    
        context.setCurrMaterial(material);
        trace('useStation:moveNextMaterial:setCurrMaterial', material);

        return material;
    }
 
    const movePrevMaterial = ()=>{
        let currentMaterial = getCurrMaterial();
        let idx = currentMaterial.order - 1; 
        
        let material;
        
        if(idx <= 0){
            material = currentMaterial; 
        }else{
            material = _getMaterialByOrder(idx);
            currentMaterial.active = false;
            material.active = true; 
        }    
        context.setCurrMaterial(material);
        trace('useStation:movePrevMaterial:setCurrMaterial', material);

        return material;
    }

    return {
        getCurrMaterial, setCurrMaterial, getStationMaterials,
        moveNextMaterial, movePrevMaterial,
    }
}
