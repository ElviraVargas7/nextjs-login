"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { post } from '@/utils/api';

const Login = () => {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const login = async () => {
        event.preventDefault()
        console.log(email)
        console.log(password)

        try {
            const response = await post("/auth/login", { email, password })
            if (response.jwt) {
                router.push("/tickets")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={login}>
            <input type="email" placeholder="Email" onChange={handleEmailChange} />
            <input type="password" placeholder="Contraseña" onChange={handlePasswordChange} />
            <button type="submit" >Login</button>
        </form>
    )
}

export default Login