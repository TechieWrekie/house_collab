import React from 'react'
import { useForm } from 'react-hook-form'
import ApiServices from '../services/ApiServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function VendorContact() {

  const {register,reset,handleSubmit,formState:{errors}} = useForm();
  const nav = useNavigate();

  const submitform =(data)=>{
    ApiServices.addcontact(data).then(
      (res)=>{
         toast.success(res.data.message)
         nav('/vendor')
      }
    )
    reset()
  }

  return (
    <>
        <div className='mt-5 pt-5'>

        {/* Heading starts here */}
        <div className='container-fluid mb-4' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Contact Us</h1>
        </div>

        {/* ======= Contact Section ======= */}
        <div className='container'>
        <section id="contact" className="contact">
          <div className='row'>
            <div className='col-lg-6'>
              <div data-aos="fade-up">
                <iframe style={{ border: "0", width: " 100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.637995711508!2d75.59098689999999!3d31.3137491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a4c6fae8ba9%3A0xd49b2f292eb27999!2sO7services%20IT%20Training%20in%20Jalandhar!5e0!3m2!1sen!2sin!4v1699362881608!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div className='col-lg-6'>
              <form onSubmit={handleSubmit(submitform)} role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text"  className="form-control" {...register('name',{minLength:{value:4,message:"Enter valid name"},required:true})} placeholder="Your Name" required />
                  {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
                  </div>


                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" {...register("email",{pattern:{value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,message:"Enter valid email"},required:true})} placeholder="Your Email" required />
                  {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input type="text" className="form-control" {...register("subject",{minLength:{value:4,message:"Minimum length should be 4"},required:true})} name="subject" id="subject" placeholder="Subject" required />
                </div>
                {errors.subject && <span style={{color:"red"}}>{errors.subject.message}</span>}


                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" {...register("message",{minLength:{value:10,message:"Minimum length should be 10"},required:true})} placeholder="Message" required></textarea>
                </div>
                {errors.message && <span style={{color:"red"}}>{errors.message.message}</span>}
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </section>{/* End Contact Section */}
        </div>

        </div>


    </>
  )
}
