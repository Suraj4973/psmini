import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/Signup",{
                email,password
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <div className="SignupPage">
            <h1>Signup</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                <input type="submit" onClick={submit}></input>
            </form>
            <br />
            <p> OR</p>
            <br />
            <Link to="/Login" />
        </div>
    )
}
export default Signup;