
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='box'>
                <label className='label'>
                    Nombre
                    <input className='input' type='text' value={name} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className='label'>
                    Telefono
                    <input className='input' type='tel' placeholder="e.m. +54 9 11 9999 9999" value={phone} onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label className='label'>
                    Email
                    <input className='input' type='email' placeholder="e.g. pepitoperez@example.com" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <label className='label'>
                    <button className='button has-background-grey-lighter' type='button'> Crear Orden</button>
                </label>
            </form>
        </div>
    )
}

export default CheckoutForm;


