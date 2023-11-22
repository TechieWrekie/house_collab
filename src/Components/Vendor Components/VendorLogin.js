import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { PuffLoader } from "react-spinners";
import './VendorLogin.css'
import ApiServices from '../services/ApiServices'


export default function UserLogin() {

  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState();
  
  const [load, setload] = useState(false);
  const history = useNavigate();

  const formHandle = (e) => {
    setload(true);

    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
  
    ApiServices.login(data)
      .then((res) => {
        
        if (res.data.success && res.data.data.userType === 3) {
          // console.log(res.data.data);
  
          setTimeout(() => {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("userData", JSON.stringify(res.data.data));
            history('/vendor');
            toast.success(res.data?.message);
            setload(false);
          }, 2000);
          
        } else {
          toast.warn(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  }
  

  



  const obj = {
    position: 'absolute',
    top: '50%',
    left: '50%',
  };
  // console.log(load)

  return (
    <>
      {load == true && <PuffLoader color="#36d7b7" load={load.toString()} cssOverride={obj} />}
      <div className={load == true ? "disable-screen" : ""}>
        <section  style={{ backgroundColor: "#eee" }}>
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center  card-body-with-margin">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black ">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body  mx-4 ">

                        <div className="text-center">
                          <img src="/assets/img/logo.png"
                            style={{ width: "250px", height: "170px" }} alt="logo" />
                          <h4 className="mt-1 mb-5 pb-1">Welcome to Vendor Login Page</h4>
                        </div>

                        <form onSubmit={formHandle}>
                          <p>Please login to your account</p>

                          <div className="form-outline mb-4">
                            <input type="email" className="form-control"
                              placeholder="Phone number or email address" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <label className="form-label" htmlFor="form2Example11">Username</label>
                          </div>

                          <div className="form-outline mb-4">
                           <div className='row'>
                            <div className='col-md-10'>
                            <input type={showPassword?'text':'password'}  value={password} onChange={(e) => { setpassword(e.target.value) }} className="form-control" />
                            <label className="form-label" htmlFor="form2Example22">Password</label>
                          </div>
                          <div className='col-md-2' style={{ marginTop:"-5px",paddingBottom:"10px" }}>
                          <i className={`bi ${showPassword ?`bi-eye-fill`:`bi-eye-slash-fill`}`} onClick={()=>setshowPassword(!showPassword)}  style={{ fontSize: '1.8rem',paddingBottom:"10px" }}></i>
                          </div>
                          </div>
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1 " >
                            <button className="btn btn-primary btn-block gradient-custom-2  mx-3">Login</button>

                            <a className="text-muted" href="#">Forgot password?</a>
                          </div>

                          <div className='row'>
                            <div className='col-md-12'>
                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <Link to="/vendor/registration" type="button" className="btn btn-outline-danger">Create new</Link>
                          </div>
                          </div>
                          <div className='col-md-12'>
                          <div className="d-flex align-items-center justify-content-center pb-4 ">
                            <p className="mb-0 me-2">Go to Homepage</p>
                            <Link to="/" type="button" className="btn btn-outline-success">Home</Link>
                          </div>
                          </div>
                          </div>

                        </form>

                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h3 className="mt-1 mb-5 pb-1 text-success fw-bold fs-3">We are House Collab Team</h3>
                        <h4 className="mb-4">We are more than just a company</h4>
                        <p className="small mb-0">Welcome to HouseCollab, the digital hub where collaboration meets home management. Whether you're sharing a living space with friends, family, or roommates, our platform is designed to streamline communication and organization. Log in to your HouseCollab account to access shared calendars, expense tracking, chore assignments, and more. It's time to transform your house into a harmonious, collaborative home. Join us today!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
