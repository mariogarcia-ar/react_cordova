import { useEffect } from "react";
import LayoutGuest from "../../components/layouts/guest"
import Login from "../../components/login";
import { useApp } from "../../hooks/useApp";

function LoginPage() {
  const {setPageTitle} = useApp();
  
  useEffect(()=>{
    setPageTitle('Participantes del Grupo');
  },[])
  
  return (
    <LayoutGuest id="LoginPage">
      <Login />
    </LayoutGuest>
  )
}

export default LoginPage
