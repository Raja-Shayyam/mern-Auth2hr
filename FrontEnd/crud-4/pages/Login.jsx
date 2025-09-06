import { useState } from "react"
import { TOLogin } from "../Axious/axiousApi"
import { GloablHook } from "../contextStore/store"
import { useNavigate } from 'react-router-dom';
import useNav from "../customHooks/navtoHome";



export const Signin_login = () => {
  const { login } = GloablHook()
  const { navgate } = useNav()

  const [data, setdata] = useState({
    email: '',
    password: '',
  })
  const handleInputs = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    console.log(data);

    const respdata = await login(data)
    console.log(respdata);

    if (respdata.sucess) {
      console.log(respdata);

      // setLoginUid(resp.data.user._id)
      // seTrue(true)

      console.log(respdata.message);

      alert(respdata.message);

      // `${<NavLink to={'/Home'} />}`  //! never work so make hook or >
      // window.location.href = '/Home'; //^ is another way and be good
      // navgat('/Home', { replace: true });
      navgate('/userPersonalProducts')


    }

  }

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <section className=" vh-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "rgb(81 154 219 / 25%",
          backdropFilter: "blur(6px)",
        }}
        
      >


        <div className="container">     
          <div className="card shadow-lg rounded-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h2 className="card-title mb-0 fs-3 fw-semibold">Welcome Back!</h2>
            </div>

            <div className="card-body p-4">
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
                    name="email"
                    onChange={handleInputs}
                    value={data.email}
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
                    name="password"
                    onChange={handleInputs}
                    value={data.password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    id="stay-signed-in"
                    name="stay-signed-in"
                    type="checkbox"
                    className="form-check-input"
                  // checked={staySignedIn}
                  // onChange={(e) => setStaySignedIn(e.target.checked)}
                  />
                  <label htmlFor="stay-signed-in" className="form-check-label">
                    Stay signed in
                  </label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot your password?<br />
                  u$hi_J2R!m
                </a>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                Sign in
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="card-footer text-center text-muted small py-3">
              <p className="mb-0">
                If you have additional products purchased through Freemius,{' '}
                <a href="https://users.freemius.com/login" className="text-decoration-none">
                  click here
                </a>{' '}
                to access your entire account with the same email and password.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
