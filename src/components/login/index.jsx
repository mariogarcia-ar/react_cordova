import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useTeam } from '../../hooks/useTeam'
import { useApp } from '../../hooks/useApp';
import Member from './member'
import './styles.css'

function Login() {
  const {isTeamReady} = useTeam();
  const navigate = useNavigate();
  const {_setupApiData} = useApp();

  const onInit = ()=>{
    navigate('/home')
  }
  useEffect(()=>{
    _setupApiData();
  },[]);
  
  return (
    <Container className='members-container'>
        <Row>
          <Col><Member position={1}/></Col>
          <Col><Member position={2}/></Col>
          <Col><Member position={3}/></Col>
          <Col><Member position={4}/></Col>
        </Row>
        <Row className='main-button-container'>
          <Col>
          <Button variant={isTeamReady()? 'primary':'secondary'}  disabled={!isTeamReady()} className="main-button"  onClick={onInit}>Comenzar Itinerario</Button>
          </Col>
        </Row>
    </Container>
  )
}

export default Login
