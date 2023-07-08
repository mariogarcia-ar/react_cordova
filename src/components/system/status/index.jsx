import React, { useEffect, useState } from 'react'
import { Alert, Button} from "react-bootstrap";
import { useApp } from '../../../hooks/useApp';
import './styles.css';

function SystemStatus() {
  const {getUsersCount, syncUsers} = useApp();
  const [isReady, setIsReady] = useState(true);
  
  useEffect(()=>{
    setIsReady(getUsersCount()>0);
  },[getUsersCount()])

  return (
    <>
    {!isReady &&     
        <Alert variant="danger">
            <Alert.Heading>No hay usuarios cargados en el sistema</Alert.Heading>
            <p>Recuerde que necesita tener conexión a internet</p>
            <Button variant="danger" onClick={syncUsers}>Cargar Usuarios</Button>
        </Alert>
    }    
    </>

  )
}

export default SystemStatus
