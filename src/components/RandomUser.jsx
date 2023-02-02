
import React, { useEffect, useState } from 'react';

const RandomUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {

        /* llamarApi() */

        fetch("https://randomuser.me/api/?results=5")
        .then((res)=> res.json())
        .then((data)=> {
            setUsers(data.results)
            console.log(users);
        })
        
        },[])

           return (
        <div>
            <h2>Usuarios.</h2>
            <div className='row'>
                {users.map(item=> 
                    <p>{item.email} </p>
                )}
                
            </div>  
        </div>
    );  
        

   
};

export default RandomUser;