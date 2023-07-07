import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
      navigate('/')
    })
  }


  return (

    <div className='loginpage'>
      <p>Sign In with Google</p>
      <button type="button" class="btn btn-primary" onClick={signInWithGoogle}>Login</button>

    </div>
  )
}

export default Login