import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Login() {
  return (
    <>
      <h1 className='title'>Log in</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                // onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='abc@test.com'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                // onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Don't have an account? <Link to='/signup'>Signup here</Link>
              </div>
              {/* <button onClick={onSignin} className='btn btn-primary mt-2'> */}
                {/* Signin
              </button> */}
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}

export default Login;