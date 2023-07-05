import { Container, Row, Col, Button, Form, FormLabel, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useInstructors } from "../../hooks/useInstructors";
import { useQuiz } from "../../hooks/useQuiz";
import { useStations } from "../../hooks/useStations";

import './styles.css';

function SidebarStationVerification() {
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm({reValidateMode: "onSubmit"});
  const {getInstructorByStarsId} = useInstructors();
  const {moveNext, isLastStation} = useStations();

  const validate_stars_id = async (value) =>{
    let _instructor = await getInstructorByStarsId(value);
    return !!_instructor;
  }

  const onSubmit = () =>{
    if(isLastStation()){
      // moveFirst(); // reset ...
      navigate('/logout');
    }else{
      moveNext();
      navigate('/station');
    }
  }

  const onError = (error) =>{
    console.error('SidebarStationVerification: ', error)
  }

  return (
    
    <Container fluid className="g-0 station-check" > 
    <Image xsrc="/pages/logout/logout_01.jpg" />
    <Container className="station-check-form">
      <Row>
        <Col>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormLabel>Ingresar código de instuctor</FormLabel>
          <Form.Group className='mb-3'>
              <Form.Control type="password"  placeholder="Stars ID del Instructor: 00"  
              {...register("stars_id", {
              required: 'Ingrese su Instructor Stars ID',
              validate: {
                  is_stars_id: validate_stars_id
              }})}/>
              {errors.stars_id && (<Form.Text className="text-danger">{errors.stars_id.message}</Form.Text >)}  
              {errors.stars_id?.type === 'is_stars_id' && (<Form.Text className="text-danger">Stars ID Inválido</Form.Text >)}    
          </Form.Group> 
          <Button variant="danger" type="submit" size="lg">Verificar</Button>      
        </Form>
        </Col>
        
      </Row>
    </Container>
    
    </Container>
  )
}

export default SidebarStationVerification
