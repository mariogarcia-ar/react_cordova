import React, { useContext, useEffect, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import './styles.css'
import { useSystem } from '../../hooks/useSystem';
import { useStations } from '../../hooks/useStations';
import { AppContext } from '../../context';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useApp } from '../../hooks/useApp';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SelecTablet(){
  const {setConfig} = useSystem();
  const {setTabletId} = useApp();

  const tablets = ['01','02','03','04','05','06','07','08','09',
                   '11','12','13','14','15','16','17','18','19',]
                  //  '21','22','23','24','25','26','27','28','29']

  const onSelectTablet = (value)=>{
    toast.success('Se cambio el codigo de tablet');
    setConfig('app_tabletId', value);
    setTabletId(value)
  }
  return (
    <>
    <DropdownButton className='d-inline-block' title="#tablet" onSelect={onSelectTablet}>
    {tablets?.map((item) =>(
      <Dropdown.Item key={item} eventKey={item}>Tablet #{item}</Dropdown.Item>
    ))}

    </DropdownButton>
    </>
  )
}

function StationLayout({isAdmin}) {
  const contextApp = useContext(AppContext)
  const navigate = useNavigate();

  const {resetSystem, getTabletId} = useApp();
  const {getConfig, setConfig} = useSystem();
  const {getListStations, getCurrentStation} = useStations();
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

    toast.success('Se actualizo el itinerario.');
    navigate('/login');
    // resetear la estacion
  }

  const setClassName = (item)=>{
    let _class = 'grid-square';
    let _station = getCurrentStation();
    if(item.id == _station.id){
      _class += ' current ';
    }
    return _class;
  }
  return (
    <>
    <h4>Itinerario :: Tablet <b>{getTabletId()}</b> {isAdmin && <SelecTablet />}</h4>
    
    

    <ReactSortable   
        id="gridDemo"
        list={listado}
        disabled={!isAdmin}
        delay={0}
        setList={setListado} >
            {listado.map((item) =>(
                <div className={setClassName(item)} key={item.key}>{item.name}</div>
            ))}
    </ReactSortable>
    {isAdmin && <Button onClick={onSave}>Guardar</Button> }
    </>
  )
}

export default StationLayout


