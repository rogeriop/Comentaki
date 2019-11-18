import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', passwd: ''})
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    if (auth.user !== null) {
        return null
    }
    return (
        <>
            <h3>Entrar na sua conta:</h3>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <div className="alert alert-dark" role="alert">{auth.signInUser.signInUserState.error}</div>
            }
            <input type='text' className="form-control" placeholder='Seu e-mail' value={form.email} onChange={onChange('email')}/>
            <input type='password' className="form-control" placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
            <button className="btn btn-primary" onClick={() => {
                auth.signInUser.signInUser(form.email, form.passwd)
            }}>Entrar</button>
        </>
    )
}

export default SignInUser