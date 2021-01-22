import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { store } from '../../store/store'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui);

    const [formValues, handleInputChange] = useForm({
        username : 'Hernando',
        email : 'h@fasd.com',
        password : '123456',
        confirm : '123456',
    });

    const {username,email,password,confirm} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email,password,username));
        }
    }

    const isFormValid = () => {
        if(username.trim().length === 0){
            dispatch(setError('The username is required'));
            return false;
        }
        else if( !validator.isEmail(email)){
            dispatch(setError('The email must be valid'));
            return false;
        }
        else if( password !== confirm || password.length < 5){
            dispatch(setError('Check the password'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className='auth__title'>Register</h3>
            <form onSubmit = {handleRegister}>

                {
                    msgError !== '' &&
                    <div className = "auth__alert-error" >
                        {msgError}
                    </div>
                }

                <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    className='auth__input'
                    autoComplete='off'
                    onChange = {handleInputChange}
                    value = {username}
                />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    onChange = {handleInputChange}
                    value = {email}
                />
                <input
                    type='password'
                    placeholder="Password"
                    name='password'
                    className='auth__input'
                    onChange = {handleInputChange}
                    value = {password}
                />
                <input
                    type='password'
                    placeholder="Confirm password"
                    name='confirm'
                    className='auth__input'
                    onChange = {handleInputChange}
                    value = {confirm}
                />
                <button
                    type='submit'
                    className="btn btn-primary btn-block mt-5"
                >
                    Register
                </button>

                <Link to='/auth/login' className='auth__social-networks'>
                    Already registered?
                </Link>
            </form>
        </>
    )
}
