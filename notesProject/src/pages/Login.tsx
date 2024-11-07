import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'
import { RootState } from '../features/store'

const Login:React.FC = () => {

    const[userName,setUserName] = useState<string>('')
    const[password,setPassword] = useState<string>("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = (e:React.FormEvent)=>{
        e.preventDefault();
        if (userName && password === '12345'){
            dispatch(login());
            navigate('/notes')
        }
        setUserName("")
        setPassword('')
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
            <label>Username:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
            </div>
            <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>

        </form>
    </div>
  )
}

export default Login