import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardImg, Container, Form, FormLabel, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useApp } from '../../../../hooks/useApp';
import { useTeam } from '../../../../hooks/useTeam';
import { useUser } from '../../../../hooks/useUser';

function MemberForm2({position, member, setMember}) {
  const [confirmed, setConfirmed] = useState(false);
  const {getJid, getAid} = useApp(); 

  const {setUser} = useUser();
  const {addMember, removeMember} = useTeam();
  const { handleSubmit, formState:{errors} } = useForm({
                                  mode: "onTouched"    ,
                                  reValidateMode: "onSubmit",
                                  defaultValues: {},
                                }) 
  
  const onSubmit = () =>{
    setUser(member);
    addMember(member, position); 
    setConfirmed(true);
  }    

  useEffect(()=>{
    let jid = getJid();
    let aid = getAid();
    //setupApiData(jid, aid);
  },[])                           
  
  const onError = (error) =>{
    console.error('MemberForm2:', error)
  }      

  const onCancel = (ev) =>{
    ev.stopPropagation(); ev.preventDefault();
    removeMember(member); // global
    setMember(null);
    setConfirmed(false);
  }  

  return (

    <Container className='text-center member-container'>
    <Card className='user_container'>
      <CardImg variant="top" src="img/user_female.svg" />  
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group className='mb-3'>
            <FormLabel className={confirmed? 'active': ''}>
              <h2>{member?.name} {member?.lastname}</h2>
              <h2>Stars ID: {member?.stars_id}</h2>
              <h3>{member?.dealership}</h3>
              {!confirmed && <small>Presioná <strong>confirmar</strong> si los datos son correctos</small>}
            </FormLabel> 
        </Form.Group>
          
          {!confirmed
            ?<Row className='g-0'>
              <Col className='col-md-6 '><Button variant="primary"  type="submit" className='btn-lg'>Confirmar</Button></Col>
              <Col className='col-md-6 '><Button variant="secondary" onClick={onCancel}  className='btn-lg'>Cancelar</Button></Col>
            </Row>

            : <Button variant="danger" onClick={onCancel}  className='lg'>Modificar</Button>
          }
        </Form>
      </Card.Body>
    </Card>
  
  </Container>    
  )
}

export default MemberForm2
