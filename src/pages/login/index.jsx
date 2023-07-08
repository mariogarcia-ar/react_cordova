import { useEffect } from "react";
import LayoutGuest from "../../components/layouts/guest"
import Login from "../../components/login";
import { useApp } from "../../hooks/useApp";
import SystemStatus from "../../components/system/status";

function LoginPage() {
  const {setPageTitle} = useApp();
  
  useEffect(()=>{
    setPageTitle('Participantes del Grupo');
  },[])
  
  return (
    <LayoutGuest id="LoginPage">
      <SystemStatus />
      <Login />     
    </LayoutGuest>
  )
}

export default LoginPage
