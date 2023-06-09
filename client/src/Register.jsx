import { useState } from 'react';
export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className='auth-form-cont'>
            <h2>Register</h2>
          <form className='register-form'onSubmit={handleSubmit}>
            <label htmlFor='name'>Full name</label>
            <input value={name} name='name' id='name' placeholder='fullname'></input>
            <label htmlFor="email"> email </label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
            <label htmlFor='password'>password</label>
            <input value={pass}  onChange={(e)=>setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'/>
            <button type='submit'>Log In</button>
          </form>
          <button className='link-but' onClick={() => props.onFormSwitch('login')}>Alredy have an account? Log in. </button>
        </div>  
    );
}