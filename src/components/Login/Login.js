import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
// import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../firebase'

const Login = () => {
  const navigate = useNavigate()

  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
    navigate('/')
    }
  }, [user])

  const googleProvider = new GoogleAuthProvider()
  const loginGoogle = () => {
    signInWithRedirect(auth, googleProvider)
    .then((res) => console.log(res))
  }
  
  return (
      <h2 onClick={loginGoogle}>
        Log In
        {/* <FcGoogle/> Sign in with Google */}
      </h2>
  )
}

export default Login