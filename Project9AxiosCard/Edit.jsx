import { useState,useEffect } from "react"
import './Edit.css'
import axios from "axios"
import { Link, useParams,useNavigate} from "react-router-dom"


const Edit = () => {
    const{id}= useParams()
    const[values,setValues]=useState({name:"",email:"",age:"",place:""})

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/users/' + id)
        .then((res)=>setValues(res.data))
        .catch((err)=>console.log(err))
    },[])

    

    function handleSubmit(event){
      event.preventDefault()
      axios.put('http://localhost:3000/users/'+id,values)
      .then(res=>{
          console.log(res)
          navigate('/')
      })
  }

  return (
    <div className="Create">
      <form>
         <h1>Update User Details</h1>
         <input type="text" value={values.name} name="name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Number"></input>
        <br></br>
        <input type="email" value={values.email} name="email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Email"></input>
        <br></br>
        <input type="number" value={values.age} name="age" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Age"></input>
        <br></br>
        <input type="text" value={values.place} name="place" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Email"></input>
        <br></br>
        <button onClick={handleSubmit}>Update</button>
        <Link to={'/'}><button>Back</button></Link>
      </form>
    </div>
  )
}

export default Edit;