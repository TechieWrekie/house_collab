import React,{useState} from 'react'
import ApiServices from '../services/ApiServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function AddService() {

  const [name, setname] = useState("");
  const [image, setimage] = useState(null);
  const nav = useNavigate();  

  const handleAddService = (e) =>{
    e.preventDefault()
    const data = new FormData()
    data.append ("name", name)
    data.append("service_image", image)
    ApiServices.addService(data).then(
      (res)=>{
        // console.log(res)
        if(name && image){
          toast.success(res.data.message)
        nav('/admin/manageservices')
        }

      }
    ).catch(
      (err)=>{
        toast.error(err.data.message)
      }
    )
  }

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setimage(selectedImage);
  }
  
  return (
    <>
      {/* Heading */}
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Add Service</h1>
        </div>
      </div>
      {/* Form starts here */}
      <div className='container mt-4'>
      <form>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">Enter the service name</label>
          <input type="text" className="form-control" id="service" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload Image</label>
          <input type="file" className="form-control" id="file" onChange={(e)=>{handleImage(e)}}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleAddService}>Submit</button>
      </form>
      </div>
    </>
  )
}
