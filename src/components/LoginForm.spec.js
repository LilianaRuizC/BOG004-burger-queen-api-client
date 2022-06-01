import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
//import Fetch from '../fetch'
import LoginForm from './LoginForm'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'



it('componente LoginForm',async () => {
    
        const history = createMemoryHistory()
        render(
          <Router location={history.location} navigator={history}>
            <LoginForm />
          </Router>,
        );
 const emailInput= screen.getByPlaceholderText('Digite su e-mail')
 const passwordInput= screen.getByPlaceholderText('Digite su contraseña')
 fireEvent.change(emailInput,{target: {value: 'mesero1@queen.com'}})
 fireEvent.change(passwordInput,{target: {value: '1234'}})

 const btnLogin = screen.getByText('Iniciar Sesión');
    fireEvent.click(btnLogin)
    //let errMnsj;
    await waitFor(() =>{
       const errMnsj = screen.getByText('Contraseña incorrecta.');
       console.log(errMnsj)
    expect(errMnsj.textContent).toBe('Contraseña incorrecta.')


     })
    })