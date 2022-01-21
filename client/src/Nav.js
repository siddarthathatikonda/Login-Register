import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import {store} from './App';

const Nav = () => {
  const [token,setToken]=useContext(store)
  return <div>
    {!token &&
      <ul>
          <Link to ='/register'>Register</Link> &nbsp; &nbsp; &nbsp;
          <Link to = '/login'>Login</Link>
      </ul>
}
  </div>
};

export default Nav;
