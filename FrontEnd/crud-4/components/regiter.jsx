import React, { useReducer } from 'react'
import { useState } from 'react'

import { GloablHook } from '../contextStore/store'
import { NavLink } from 'react-router-dom'
import useNav from "../customHooks/navtoHome";

// username: '',
//     email: '',
//     password: '',
export const Regiter = () => {
  const { register } = GloablHook()
  const { navgate } = useNav()
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    Cpassword: ''
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);

    const resp = await register(state)
    // console.log('Message from server: ', resp.response.data.message);  registr
    console.log('resp ', resp);
    if(resp){
      navgate('/Login')
    }
  }



  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <section className="bg-light vh-100 d-flex align-items-center justify-content-center">
        <div className="container mt-3">
          <form onSubmit={handleSubmit}
            className="card shadow-lg rounded-4" style={{ maxWidth: '450px', margin: '0 auto' }}>
            <div className="card-header bg-success text-white text-center py-4">
              <h2 className="card-title mb-0 fs-3 fw-semibold">Create Account</h2>
            </div>

            <div className="card-body p-4">
              {/* UserName Name Input */}
              <div className="mb-3">
                <label className="visually-hidden" htmlFor="firstName-input">
                  UserName
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    id="firstName-input"
                    type="text"
                    placeholder="User name"
                    className="form-control"
                    value={state.username}
                    name='username'
                    onChange={handleChange}
                    // ref={myUN}
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label className="visually-hidden" htmlFor="email-input">
                  Email address
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    id="email-input"
                    type="email"
                    placeholder="Email address"
                    className="form-control"
                    value={state.email}
                    name='email'
                    onChange={handleChange}
                    // ref={myeml}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label className="visually-hidden" htmlFor="password-input">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    id="password-input"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={state.password}
                    name='password'
                    onChange={handleChange}
                    // ref={mypswd}
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="mb-3">
                <label className="visually-hidden" htmlFor="confirmPassword-input">
                  Confirm Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    id="confirmPassword-input"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={state.Cpassword}
                    name='Cpassword'
                    onChange={handleChange}
                    // ref={Cmypswd}
                    // value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    className="form-check-input"
                    // checked={agreeToTerms}
                    // onChange={(e) => setAgreeToTerms(e.target.checked)}
                    required
                  />
                  <label htmlFor="agree-terms" className="form-check-label">
                    I agree to the{' '}
                    <a href="#" className="text-decoration-none">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-decoration-none">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"

                className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                Create Account
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="card-footer text-center text-muted small py-3">
              <p className="mb-0">
                Already have an account?{' '}
                <NavLink to="/Login" className="text-decoration-none">
                  Sign in here
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
