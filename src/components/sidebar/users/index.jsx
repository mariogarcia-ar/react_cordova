import { Button, Container } from 'react-bootstrap'
import { useApp } from '../../../hooks/useApp';

function SidebarUsers() {
  const {getUsersCount, syncUsers, getUserByStarsId} = useApp();

  const onSync = ()=>{
    syncUsers();
  }

  // const onShowUser = async (id) =>{
  //   id = 1;
  //   const user = await getUserByStarsId(id);
  //   console.log('user', user)
  // }
  
  return (
    <Container>
      <h3>Usuarios</h3>
      <p>Cantidad de usuarios: <b>{getUsersCount()}</b></p>
      <Button onClick={onSync}>Sincronizar Usuarios</Button>
    </Container>
  )
}

export default SidebarUsers
