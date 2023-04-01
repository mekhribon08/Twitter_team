import React from 'react'
import "./Login.scss"
import Logo from "./../../../public/Logo.svg"
import Password from './password/Password'

export default function Login() {
  return (
    <div>
        <h1>
            <a href="#">
                <img src={Logo} />
            </a>
        </h1>

        <h2>Log in to Twitter</h2>
        <Password />
    </div>
  )
}
