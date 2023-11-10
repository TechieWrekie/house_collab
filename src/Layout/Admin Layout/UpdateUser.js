import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import ApiServices from '../../Components/services/ApiServices';
import bcrypt, { compare } from 'bcryptjs';

export default function UpdateUser() {

  const nav = useNavigate();
  const param = useParams();
  const id = param.id;
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [oldpassword, setoldpassword] = useState("");
  const [hashpassword, sethashpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [type, settype] = useState("password");
  const [typenew, settypenew] = useState("password");
  
  
  
  
  
  

 const handleForm = async (e) =>{
   e.preventDefault()
    const comparepassword = await bcrypt.compare(oldpassword,hashpassword)

    if(oldpassword == newpassword){
    return  toast.error("Old and new password can not be same")
    }

    if(comparepassword){
    let updatedData = {
        _id: id,
        email: email,
        name:name,
        password: newpassword
      } 
      ApiServices.updateUser(updatedData).then(
        (res)=>{
            toast.success(res.data.message)
            nav("/admin/showuser")
    
        }
      ).catch(
        (error)=>{
            toast.error(error.message)
          }
      )
 }else{
  toast.error("Old Password is incorrect")
 }
}

    useEffect(
        ()=>{
            const data ={
                _id:id
            }
            ApiServices.singleUser(data).then(
                (res)=>{
                    console.log(res)
                    setname(res.data.data.name)
                    setemail(res.data.data.email)
                    sethashpassword(res.data.data.password)
                    console.log(hashpassword)
                }
            )
        },[]
    )

      const passToggleOld = () =>{
          if(type == "password" && oldpassword != "" ){
            settype("text")
          }else{
            settype("password")
          }
      }
      const passToggleNew = () =>{
          if(typenew == "password" && newpassword != "" ){
            settypenew("text")
          }else{
            settypenew("password")
          }
      }
  return (
    <>
      <div>
        <section className="gradient-custom">
          <div className="container py-5 ">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration cardPosition" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Form</h3>
                    <form onSubmit={handleForm} >

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <div className="form-outline">
                            <input type="text" id="Name" className="form-control form-control-lg" value={name} onChange={(e)=>{setname(e.target.value)}}  />
                            <label className="form-label" htmlFor="Name">Name</label>
                          </div>

                        </div>
                        <div className="col-md-6 mb-4">

                        </div>
                      </div>

                    

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-lg" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                            <label className="form-label" htmlFor="emailAddress">Email</label>
                          </div>

                        </div>
                        
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <div className="form-outline">
                            <input type={type} id="password" className="form-control form-control-lg" value={oldpassword} onChange={(e)=>{setoldpassword(e.target.value)}}  />
                            <label className="form-label" htmlFor="password">Old Password</label>
                          </div>

                        </div>
                        <div className="col-md-6 mb-5">
                        {type === "password" ? (<i className="bi bi-eye-fill" style={{fontSize:"30px"}} onClick={passToggleOld}></i> ) : (<i class="bi bi-eye-slash-fill" style={{fontSize:"30px"}} onClick={passToggleOld}></i>)}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <div className="form-outline">
                            <input type={typenew} id="password" className="form-control form-control-lg" value={newpassword} onChange={(e)=>{setnewpassword(e.target.value)}} />
                            <label className="form-label" htmlFor="password" >New Password </label>
                          </div>

                        </div>
                        <div className="col-md-6 mb-4">
                        {typenew === "password" ? (<i className="bi bi-eye-fill" style={{fontSize:"30px"}} onClick={passToggleNew}></i> ) : (<i class="bi bi-eye-slash-fill" style={{fontSize:"30px"}} onClick={passToggleNew}></i>)}
                        </div>
                      </div>
                     

                      <div>
                        <input className="btn btn-primary btn-lg" type="submit" value="Update" />
                      </div>

                    </form>
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
