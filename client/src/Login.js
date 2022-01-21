import React, { useState,useContext } from 'react';
import axios from 'axios';
import {store} from './App';
import {Navigate} from 'react-router-dom';

const Login = () => {
    const[token,setToken]=useContext(store)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submithandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
       return <Navigate  to ='/myprofile'/>
    }
    return <div>
        <center>
            <form autoComplete='off' onSubmit={submithandler}>
                <h3>Login</h3>
                <input type="email" name="email" placeholder="Email"  onChange={changehandler} /><br />
                <input type="password" name="password" placeholder="password"  onChange={changehandler} /><br />
                <input type="submit" value="Login" /><br />
            </form>

        </center>


    </div>;
};

export default Login;
