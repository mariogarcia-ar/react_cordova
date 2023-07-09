import { Button, Container } from 'react-bootstrap'
import { useApp } from '../../../hooks/useApp';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SidebarUsers({isAdmin}) {
  const {getUsersCount, syncUsers, resetSystem} = useApp();
  const navigate = useNavigate();

  const onSync = ()=>{
    syncUsers();
    toast.success('Los usuarios fueron sincronizados');

  }
  
  const onReset = (resetCache, hardReset)=>{
    toast.success('El sistema fue actualizado');
    resetSystem(resetCache, hardReset);
    navigate('/login')
  }

  return (
    <Container>
      <h4>Usuarios</h4>
      <p>Cantidad de usuarios: <b>{getUsersCount()}</b></p>
      <Button onClick={onSync}>Sincronizar Usuarios</Button> &nbsp;
      <Button variant="warning" onClick={()=>navigate('/logout')}>Logout</Button>
      
      {isAdmin && 
      <>
      <hr/>
      <h4>System</h4>
      <Button variant="warning" onClick={()=>onReset(false)}>Reiniciar Sistema</Button> &nbsp;
      <p><b>Reiniciar Sistema</b>:.</p>
      
      <Button variant="warning" onClick={()=>onReset(true, false)}>Eliminar Cache</Button>
      <p><b>Eliminar Cache</b>: borra toda informacion temporal. Mantiene los datos de los usuarios sincronizados 
      y la configuracion del layout del recorrido</p>

      <Button variant="danger" onClick={()=>onReset(true, true)}>Eliminar Datos</Button>
      <p><b>Eliminar Datos</b>: borra toda configuracion del sistema.</p>      
      </>
      }
    </Container>
  )
}

export default SidebarUsers
