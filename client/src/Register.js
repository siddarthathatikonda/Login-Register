import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submithandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', data).then(
            res => alert(res.data)
        )
    }
    return <div>
        <center>
            <form autoComplete='off' onSubmit={submithandler}>
                <h3>Register</h3>
                <input type="text" name="username" placeholder="Username"  onChange={changehandler} /><br />
                <input type="email" name="email" placeholder="Email"  onChange={changehandler} /><br />
                <input type="password" name="password" placeholder="password"  onChange={changehandler} /><br />
                <input type="password" name="confirmpassword" placeholder="Confirm Password"  onChange={changehandler} /><br />
                <input type="submit" value="Register" /><br />
            </form>

        </center>


    </div>;
};

export default Register;
