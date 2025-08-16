import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useEffect } from 'react'

const LoginPopup = ({setLoginPopUp}) => {
    const [currentState, setCurrentState] = useState('Sign up')
    const [errMsg, setErrMsg] = useState('')
    
    const { url, token, setToken} = useContext(StoreContext)
    

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''       
    })

    const onChangeData = (e) => {
        setData((data) => ({...data, [e.target.name]: e.target.value}))
    }

    
    const onSubmithandler = async (e) => {
        e.preventDefault()
        console.log('Login')
        let newUrl = url
        if(currentState === 'Login'){
            newUrl += '/api/user/login'
        }else{
            newUrl += '/api/user/register'
        }
        
        const response = await axios.post(newUrl, data)
        console.log(response)

        if(response.data.success){
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
            setLoginPopUp(false)
            setErrMsg('')
        }else{
            console.log(response.data.message)
            setErrMsg(response.data.message)
        }

    }

    return (
        <div className='login-popup'>
            <div className="login-popup-content">

                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setLoginPopUp(false)} src={assets.cross_icon} className='cross' alt="" />
                </div>
                <form onSubmit={onSubmithandler} className="login-popup-inputs">
                    {currentState === 'Sign up' && <input onChange={onChangeData} name="name" value={data.name} type="text" placeholder='your name' required />}
                    <input onChange={onChangeData} name='email' value={data.email} type="email" placeholder='Your email' required />
                    <input onChange={onChangeData} name='password' value={data.password} type="password" placeholder='password' required />
                    <button type="submit">{currentState === 'Sign up' ? 'Create Account' : 'Login'}</button>
                    {errMsg && <p style={{color: 'red', fontSize:'20px', textAlign: 'center', position:'relative'}}>{errMsg}</p>}
                </form>
                <div className="login-popup-bottom">
                    <input type="checkbox" required />
                    <p>By contining, You are agree with company terms and agreement </p>
                  
                </div>
                <div className="login-popup-last">
                {currentState === 'Sign up' ?
                    <p>Already have a account?<span onClick={() => setCurrentState('Login')}>Login</span></p> :
                    <p>Don't have a account?<span onClick={() => setCurrentState('Sign up')}>Click here</span></p>
                }
                </div>
                

            </div>
        </div>
    )
}

export default LoginPopup
