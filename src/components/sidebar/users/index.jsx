import { Button, Container } from 'react-bootstrap'
import { useApp } from '../../../hooks/useApp';
import { useNavigate } from 'react-router-dom';

function SidebarUsers() {
  const {getUsersCount, syncUsers, resetSystem} = useApp();
  const navigate = useNavigate();

  const onSync = ()=>{
    syncUsers();
  }
  
  const onReset = (resetCache)=>{
    resetSystem(resetCache);
    navigate('/login')
  }

  return (
    <Container>
      <h4>Usuarios</h4>
      <p>Cantidad de usuarios: <b>{getUsersCount()}</b></p>
      <Button onClick={onSync}>Sincronizar Usuarios</Button> &nbsp;
      <Button variant="warning" onClick={()=>navigate('/logout')}>Logout</Button>
      <hr/>
      <h4>System</h4>
      <Button variant="warning" onClick={()=>onReset(false)}>Reinicia Sistema</Button> &nbsp;
      <Button variant="danger" onClick={()=>onReset(true)}>Limpiar Cache</Button>
    </Container>
  )
}

export default SidebarUsers
