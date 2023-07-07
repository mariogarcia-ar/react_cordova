import { Button, Card, CardImg, Container, Form, FormLabel, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useApp } from '../../../../hooks/useApp';
// import { useUser } from '../../../../hooks/useUser';

function MemberForm1({position, member, setMember}) {
    const {register, handleSubmit, formState:{errors}} = useForm({reValidateMode: "onSubmit"});
    // const {getUserByStarsId} = useUser();
    const {getUserByStarsId} = useApp();
    
    const validate_stars_id = async (value) =>{
      let _user = await getUserByStarsId(value);
      if(_user) setMember(_user);
      return !!_user;
    }
  
    const onSubmit = async () =>{
      // console.log('Member:onsubmit')
    }
    const onError = (error) =>{
      console.error('Member:onError', error)
    }

  return (
    
    <Container className='text-center member-container'>
      <Card className='user_container'>
        <CardImg variant="top" src="img/user_female.svg" />  
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className='mb-3'>
            <Form.Control type="number" placeholder="Stars ID con ceros: 001234"  
            {...register("stars_id", {
            required: 'Ingrese su Stars ID',
            validate: {
                is_stars_id: validate_stars_id
            }})}/>
            {errors.stars_id && (<Form.Text className="text-danger">{errors.stars_id.message}</Form.Text >)}  
            {errors.stars_id?.type === 'is_stars_id' && (<Form.Text className="text-danger">Stars ID Inválido</Form.Text >)}    
            </Form.Group>  
            
            <Button type="submit" size="lg">Ingresar</Button>
            
          </Form>
        </Card.Body>
      </Card>
    
    </Container>     
  )
}

export default MemberForm1