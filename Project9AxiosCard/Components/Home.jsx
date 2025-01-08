import React, { useEffect,useState } from 'react'
import './Carud.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"


const Home = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/users").then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    },[data])

    function handleDelete(id){
        axios.delete('http://localhost:3000/users/'+id)
        .then(res => console.log(res.json()))
        navigate('/')

    }

  return (
    <div>
    <div className="home">
        <nav>
            <h1>Crud App</h1>
            <Link to={"/create"}>
            <button>Add+</button>
            </Link>
        </nav>
        <br />
        <center>
            <table width={"90%"} border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>{item.place}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`} >
                                    <button>Edit</button>
                                    </Link>
                                    <button onClick={()=> handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </center>
    </div>
    </div>
  )
}

export default Home