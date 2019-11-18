import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
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
            <h3>Criar nova conta:</h3>
            {
                auth.createUser.createUserState.error !== '' &&
                <p className="alert alert-danger" >{auth.createUser.createUserState.error}</p>
            }

            <input type='text' className="form-control" placeholder='Seu e-mail' value={form.email} onChange={onChange('email')}/>
            <input type='password' className="form-control" placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
            <button className="btn btn-primary" onClick={() => {
                auth.createUser.createUser(form.email, form.passwd)
            }}>Criar</button>
        </>
    )
}

export default CreateUser