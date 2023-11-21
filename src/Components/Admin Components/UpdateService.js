import React, { useEffect,useState } from 'react'
import ApiServices from '../services/ApiServices'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { PuffLoader } from "react-spinners";

export default function 
UpdateService() {

  const [data, setdata] = useState();
  const [prevImage, setprevImage] = useState('');
  const [serviceName, setserviceName] = useState('');
  const [image, setimage] = useState('');
  const [load, setload] = useState(true);
  
  
  
  
  const nav = useNavigate()
  const param = useParams();
  const serviceId = param.id

  const handleUpdateService =(e) =>{
    const data = new FormData();
    e.preventDefault()
    data.append("_id",serviceId)
    data.append("name",serviceName)
    data.append("service_image",image)
      ApiServices.updateservice(data).then(
        (res)=>{
          console.log(res)
          if(serviceName){
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

  const changeImage =(e)=>{
    setimage(e.target.files[0])

  }

  useEffect(
    () => {
      const data ={
        _id:serviceId
      }
      ApiServices.singleservice(data).then(
        (res)=>{
          setTimeout(() => {
            console.log(res)
          setdata(res.data.data)
          setprevImage(res.data.data.signedUrl)
          setserviceName(res.data.data?.name)
          setload(false)
          }, 2000);
        }
      )
    }, [load]
  )
  const obj ={
    position: 'absolute',
    top: '30%',
    left: '50%',
  }
  return (
    <>
    {/* loader */}
    {load==true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load==true?'disable-screen':''}>
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Update Service</h1>
        </div>
      </div>

      {/* Form starts here */}
      <div className='container mt-4'>
        <form>
          <div className='row'>
            <div className='col-lg-6'>
          <div className="mb-3">
            <label htmlFor="service" className="form-label">Enter the service name</label>
            <input type="text" value={serviceName} onChange={(e)=>{setserviceName(e.target.value)}} className="form-control" id="service" />
          </div>
          </div>
          <div className='col-lg-6 ps-4'>
          <div className="mb-3">
            <label htmlFor="file" className="form-label mx-4">Previous Image</label>
            {prevImage && (
              <img src={prevImage} className='mx-4' style={{ width: "150px", height: "120px" }} alt="Previous" />
            )}
          </div>
          </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="newfile" className="form-label">Upload New Image</label>
            <input type="file" className="form-control" id="newfile" onChange={(e)=>{changeImage(e)}} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e)=>{handleUpdateService(e)}}>Submit</button>
        </form>
      </div>
      </div>
    </>
  )
}
