import { Container, Form, Offcanvas } from 'react-bootstrap'
import { useApp } from '../../hooks/useApp';
import { useQuiz } from '../../hooks/useQuiz';


// 13-42-92    2023-07-11    
// 13-43-96    2023-07-12    
// 13-44-100   2023-07-13    
// 13-45-104   2023-07-14    
// 15-46-108   2023-08-02
// 15-47-112   2023-08-03

function Sidebar({show, handleClose}) {
    const {getJid, setJid, getAid, setAid, getFecha} = useApp();
    const {setupApiData} = useQuiz();

    const onSelectJornada = (ev)=>{
        let aid = getAid();
        let jid = ev.target.value;
        setJid(jid);
        //setupApiData(jid, aid);
    }

    const onSelectActividad = (ev)=>{
        let jid = getJid();
        let aid = ev.target.value;
        setAid(aid);
        //setupApiData(jid, aid);
    } 

  return (
     
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            
<Container>
    <h4>Fecha:{getFecha()}</h4>
    <h4>Jornada ID:{getJid()}</h4>
    <h4>Actividad ID:{getAid()}</h4>
    <ul>
         <li>2023-07-11 <b>eid</b>=13  <b>jid</b>=42  <b>aid</b>=92    </li>
         <li>2023-07-12 <b>eid</b>=13  <b>jid</b>=43  <b>aid</b>=96    </li>
         <li>2023-07-13 <b>eid</b>=13  <b>jid</b>=44  <b>aid</b>=100   </li>
         <li>2023-07-14 <b>eid</b>=13  <b>jid</b>=45  <b>aid</b>=104   </li>
         <li>2023-08-02 <b>eid</b>=15  <b>jid</b>=46  <b>aid</b>=108   </li>
         <li>2023-08-03 <b>eid</b>=15  <b>jid</b>=47  <b>aid</b>=112   </li>
    </ul>
    <Form>
        <Form.Group className='mb-3'>
            <Form.Select aria-label="Jornada" onChange={onSelectJornada} defaultValue={getJid()}>
            {[42,43,44,45,46,47,48].map(jid=>(
                <option key={jid} value={jid} >Jornada {jid}</option>
            ))}
            </Form.Select>
        </Form.Group>       

        <Form.Group className='mb-3'>
            <Form.Select aria-label="Actividad" onChange={onSelectActividad} defaultValue={getAid()}>
            {[92,96,100,104,108,112].map(jid=>(
                <option key={jid} value={jid} >Actividad {jid}</option>
            ))}
            </Form.Select>
        </Form.Group>             
    </Form>    
</Container>

        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Sidebar
