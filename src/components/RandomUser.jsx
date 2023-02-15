
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

const RandomUser = () => {
    const [users, setUsers] = useState([]);
    const {cuant, gender} = useContext(Context)
    useEffect(()=> {

        /* llamarApi() */

        fetch(`https://randomuser.me/api/?results=${cuant}&gender=${gender}`)
        .then((res)=> res.json())
        .then((data)=> {
            setUsers(data.results)
            console.log(users);

        })
        
        },[])

           return (
        <div>
            <h2 className='text-center'>Usuarios.</h2>
            <div className='row d-flex justify-content-around'>
                {
                users.map(item=> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='p-3' variant="top" src={item.picture.large} />
                        <Card.Body>
                            <Card.Title>{item.name.first} </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Email: {item.email} </ListGroup.Item>
                            <ListGroup.Item>Genero: {item.gender} </ListGroup.Item>
                            <ListGroup.Item>Pais: {item.location.country} </ListGroup.Item>
                            <ListGroup.Item>Telefono: {item.phone} </ListGroup.Item>
                        </ListGroup>
                        <Card.Body className='d-flex justify-content-center'>
                            <button type="button" class="btn btn-secondary text-center">Eliminar usuario.</button>
                        </Card.Body>
                    </Card>
                )}
                <div className='d-flex justify-content-center'>
                    <Link to={"/"}><button type="submit" class="btn btn-primary">Volver atras.</button></Link>
                </div>
                    
            </div>  
        </div>
    );  
        

   
};

export default RandomUser;