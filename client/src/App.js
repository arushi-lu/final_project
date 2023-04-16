import { useState } from 'react';
import React from 'react';
import { Login } from './Login';
import { Register } from './Register';
import './App.css';


const App = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formname) => {
        setCurrentForm(formname);
    }
    return(
        <div className='App'>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }
            
        </div>
    );
}

export default App;
