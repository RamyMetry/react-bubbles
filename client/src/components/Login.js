import React,{useState} from "react";
import api from "../utils/api"

const Login = (props) => {
  
  const [error,setError]=useState()
    const [data,setData]=useState({
        username:"",
        password:"",
    })

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit=(event)=>{
        // event.preventDefault()
        api().post("/api/login",data)
        .then(res=>{
          // console.log(res)
            localStorage.setItem("token",res.data.payload)
            props.history.push("/bubble-page")
        })
        .catch(err=>{
            console.log(err)
            setError(err.response.data.message)
        })
    }

  return (
    <>
    <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <input type="text" name="username" placeholder="User Name" value={data.username} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange}/>
        <button type="submit">Log In</button>
      </form> 
    </>
  );
};

export default Login;
