import React,{useEffect, useState} from 'react'
import ApiServices from '../services/ApiServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

export default function VendorAddSubService() {
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [vendorsingledata, setvendorsingledata] = useState([]);
  const [load, setload] = useState(false);
  
  const vendordatastring = sessionStorage.getItem("userData")
  const vendordata = JSON.parse(vendordatastring)
  const vendorId = vendordata._id
  
  const nav = useNavigate()
  
  const handleAddSubService = (e) =>{
    setload(true)
    e.preventDefault()
    const data = new FormData()
    data.append ("name",name)
    data.append ("price",price)
    data.append ("vendorId",vendorId)
    data.append ("description",description)
    data.append ("serviceId", vendorsingledata.serviceId._id)
    data.append("subService_image",image)
    ApiServices.addsubservice(data).then(
      (res)=>{
        // console.log(res)
        setTimeout(() => {
          toast.success(res.data.message)
        nav('/vendor/managesubservice')
        setload(false)
        }, 2000);

      }
    ).catch(
      (err)=>{
       setTimeout(() => {
        toast.error(err.data.message)
        setload(false)
       }, 2000);
      }
    )
  }

  useEffect(
    ()=>{
      const data={
        "_id":vendorId
      }
      ApiServices.vendorsingle(data).then(
        (res)=>{
          setvendorsingledata(res.data.data)
        }
      )
    },[]
  )

  const handleImage=(e)=>{
    setimage(e.target.files[0])
  }

  const obj = {
    position: 'absolute',
    top: '30%',
    left: '50%',
  };
  return (
    <>
    {/* loader */}
    {load==true && <PuffLoader color="#36d7b7"  load={load} cssOverride={obj}/>}
      <div className={load==true?'disable-screen':''}>
      {/* Heading */}
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Add Sub-Service</h1>
        </div>
      </div>
      {/* Form starts here */}
      <div className='container mt-4'>
      <form onSubmit={handleAddSubService}>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">Enter the sub service name</label>
          <input type="text" className="form-control" id="service" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Enter the price</label>
          <input type="number" className="form-control" id="price" value={price} onChange={(e)=>{setprice(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Enter the description</label>
          <textarea className="form-control" id="desc" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload Image</label>
          <input type="file" className="form-control" id="file" onChange={(e)=>{handleImage(e)}}/>
        </div>
        <button className="btn btn-primary mb-5 mt-1" >Submit</button>
      </form>
      </div>
      </div>
    </>
  )
}
