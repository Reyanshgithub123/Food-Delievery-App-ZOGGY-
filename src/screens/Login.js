import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
   const [credentials, setCredentials] = useState({
    
      email: "",
      password: "",
      
      
    });
    let navigate=useNavigate()
    console.log("Submitting credentials:", credentials);
    const handleSubmit = async (e) => {
      e.preventDefault();
    
        console.log("Sending request to create user...");
        const response = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          }, 
          
          body: JSON.stringify({
           
            email: credentials.email,
            password: credentials.password,
          
          }),
  
          
        });
            const json=await response.json()
            console.log(json,"letsoo groo broo")
  
            if(!json.success){
              alert("Enter valid creditials")
  }
      if(json.success){
        localStorage.setItem('userEmail', credentials.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    }
  
    const onChange = (event) => {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    };
  return (
    
    <div>
     <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/createuser" className="m-3 btn btn-danger">
          New User
        </Link>
      </form>
    </div>
    </div>
  )
}

export default Login
