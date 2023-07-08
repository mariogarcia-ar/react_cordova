import React, { useContext, useEffect, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import './styles.css'
import { useSystem } from '../../hooks/useSystem';
import { useStations } from '../../hooks/useStations';
import { AppContext } from '../../context';
import { Button } from 'react-bootstrap';
import { useApp } from '../../hooks/useApp';

function StationLayout() {
  const contextApp = useContext(AppContext)

  const {resetSystem} = useApp();
  const {getConfig, setConfig} = useSystem();
  const {getListStations} = useStations();
  const [listado , setListado] = useState(getConfig('station_layout', getListStations()))

  useEffect(()=>{
      let stations = [];
      for (const [idx, item] of listado.entries()){
        item.order = idx+1; // stations base 1
        // item.name = item.title + " ["+item.order+"]";
        stations.push(item)
      }
      setConfig('station_layout', stations);
  },[listado])

  useEffect(()=>{
    if(contextApp.resetSystem){
      //setListado(getListStations())
    }
  },[contextApp.resetSystem])


  const onSave = () =>{
    // stations 
    let stations = getConfig('stations',[]);
    for(const idx in listado){
      let item = listado[idx];


      for(const jdx in stations.stations){
        let station = stations.stations[jdx];
        if(station.id == item.id){
          station.order = item.order;
          station.pepe = item.order;
          stations.stations[jdx] = station;
        }
      }
    }
    
    let station_layout = getConfig('station_layout');
    resetSystem(false);

    setConfig('stations', stations);
    setConfig('station_layout', station_layout);
    setListado(station_layout);
    // resetear la estacion
  }

  return (
    <>
    <h4>Itinerario :: Tablet <b>15</b></h4>
    <Button onClick={onSave}>Guardar</Button>
    <ReactSortable   
        id="gridDemo"
        list={listado}
        delay={0}
        setList={setListado} >
            {listado.map((item) =>(
                <div className='myitems grid-square' key={item.key}>{item.name}</div>
            ))}
    </ReactSortable>
    </>
  )
}

export default StationLayout


