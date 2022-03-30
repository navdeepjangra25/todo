import React, { useState } from 'react';

const Users = () => {

    const [users,setUsers] = useState([
        {
            id:1,
            name:"Navdeep",
            email:"abc@gmail.com"
        },
        {
            id:2,
            name:"Anil",
            email:"abcd@gmail.com"
        },
        {
            id:3,
            name:"Amit",
            email:"abce@gmail.com"
        },
        {
            id:4,
            name:"Ajay",
            email:"abcf@gmail.com"
        }
    ]) ;

        return (
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user => {
                               return (
                                   <tr>
                                      <td>{user.id}</td>
                                      <td>{user.name}</td>
                                      <td>{user.email}</td>
                                   </tr>
                           )
                           })
                       }
                    </tbody>
                    </table>
            </div>
        );
}

export default Users;
