import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './UserLogin.css'
export default function UserLogin() {

  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState("");
  const history = useNavigate();

  const handleclick = () => {
    if (email === "admin@gmail.com" && password === "123") {
      // console.log("Admin  verified")
      history('/admin')

    } else if (email === "yourname@gmail.com" && password === "123") {
      // console.log("User verified")
      history('/user')
    } else {
      setmsg("No user found")
    }
  }


  return (
    <>
      <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 card-body-with-margin">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black ">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body  mx-4 ">

                      <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input type="email" className="form-control"
                            placeholder="Phone number or email address" value={email} onChange={(e) => { setemail(e.target.value) }} />
                          <label className="form-label" htmlFor="form2Example11">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="form-control" />
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                        </div>
                        <div className='text-danger'>
                          {msg}
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1 " >
                          <button className="btn btn-primary btn-block" onClick={handleclick} type="button" style={{
                            display:
                              "block !important"
                          }}>Login</button>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger">Create new</button>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
