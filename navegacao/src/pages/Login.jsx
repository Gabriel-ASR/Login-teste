import { useNavigate } from "react-router-dom";
import { useRef } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Login(props) {
    const navigate = useNavigate();
    const refEmail = useRef()
    const refSenha = useRef()
    const hookForm = useForm()
    const { register, handleSubmit } = hookForm

    const users = [{user: "gabriel04asr@gmail.com", password: "user123"}]

    const handleFormSubmit = (data) => {
        if (data.email ==  users.map(usur => usur.user) && data.senha == users.map(usur => usur.password)) {
            props.onLogin(data);
            navigate("/")
        }
        else {
            console.log("E-mail ou senha incorretos!")
            console.log(data.email, users.map(usur => usur.user), data.senha, users.map(usur => usur.password))
        }
}

    return (
        <div  style={{height: "100vh"}} className="d-flex align-items-center justify-content-center">
            <div className="p-5 rounded d-flex flex-column w-25 border justify-content-center align-items-center gap-3">
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} action="" className=" w-100 d-flex flex-column gap-3 align-items-center justify-content-center">
                <div className="w-100">
                    <label htmlFor="email">E-mail</label>
                    <input {...register("email")} className="form-control w-100" type="email" id="email"/>
                </div>
                <div className="w-100">
                    <label htmlFor="senha">Senha</label>
                    <input {...register("senha")} className="form-control w-100" type="password" id="senha"/>
                </div>
                <button className="btn btn-primary w-100 mt-4">Entrar</button>
                </form>
            </div>
        </div>
    )
}