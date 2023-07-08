import { useEffect } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LayoutGuest from "../../components/layouts/guest"
import LayoutHeadless from "../../components/layouts/headless";
import { useApp } from "../../hooks/useApp";
import Logout from "../../components/logout";

function LogoutPage() {
  const {setPageTitle} = useApp();
  const navigate = useNavigate();

  useEffect(()=>{
    setPageTitle('Logout');
  },[])

  return (
    <LayoutHeadless id="LogoutPage">
      <Logout />
    </LayoutHeadless>
  )
}

export default LogoutPage
