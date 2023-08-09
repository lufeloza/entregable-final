import {useForm} from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () =>{

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const submit = data =>{
        console.log (data)
        axios
            .post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then(resp =>{
                //almacenar token en localstorage
                localStorage.setItem('token', resp.data.token)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                if(error.response.status === 401){
                    alert('Usuario y Contraseñas incorrectas')
                }
            })
    }

    return(
        <main className='container-main'>
            <Row md={1} lg={2} className='container-row'>
                
                <Col ><Form onSubmit={handleSubmit(submit)} className='card border-primary mb-3'>
                <h1>LOGIN</h1>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    {...register('email')}
                    />
                    <Form.Text className="text-muted">
                    No compartir el correo
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    {...register('password')}
                    />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
                 </Form>  
                </Col>
            
            </Row>
            
        </main>
    )
}

export default Login