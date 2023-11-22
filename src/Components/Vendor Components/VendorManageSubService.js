import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners'
import ApiServices from '../services/ApiServices';
import { toast } from 'react-toastify';

export default function VendorManageSubService() {

  const vendordatastring = sessionStorage.getItem('userData')
  const vendordata = JSON.parse(vendordatastring)
  const vendorId = vendordata._id
  
  const [serviceId, setserviceId] = useState(null);
  const [load, setload] = useState(true);
  const [data, setdata] = useState([]);
  
  
  const handleStatus=(_id,status)=>{
    setload(true)
    const data = {
      _id,
      status
    }
    ApiServices.subservicechangestatus(data).then(
      (res)=>{
        setTimeout(() => {
          toast.success(res.data.data)
          setload(false)
        }, 1500);
      }
    )
  }
  const serviceid =()=>{
    const data ={
      _id:vendorId
    }
    ApiServices.vendorsingle(data).then(
      (res)=>{
        setserviceId(res.data.data.serviceId?._id)
      }
    )
  }
  useEffect(
    ()=>{
      serviceid()
    },[]
  )
  useEffect(
    ()=>{
      
      const data ={
        serviceId,
        vendorId
      }
      ApiServices.showsubservice(data).then(
        
        (res)=>{
          
          setdata(res.data.data)
          setTimeout(() => {
            setload(false)
          }, 2500);
        }
      ).catch(
        (error)=>{
          toast.error("Something went wrong")
          setload(false)
        }
      )
    },[serviceId]
  )

  const obj ={
    position:"absolute",
    left:"50%",
    top:"30%"
  }
  const filteredData = data?.filter((e) => e.status !== false)

  return (
    <>
    {/* Loader  */}
    {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
    {/* Heading */}
    <div className={load == true ? "disable-screen" : ""}>
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Manage Service</h1>
        </div>


        {/* Table starts from here */}
        <div className='container mt-5'>
        <div className='table-responsive'>
          <table className="table  table-hover">
            <thead>
              <tr className='table-dark'>
                <th scope="col">S. No.</th>
                <th scope="col">Image</th>
                <th scope="col">Sub Service Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              
              { filteredData?.map((element, index) => {
                const createdAtDate = new Date(element.createdAt)
                const formattedDate = createdAtDate.toLocaleDateString('en-US')
                
                return (<tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row"><img src={element?.signedUrl} style={{ width: "150px", height: "120px" }}></img></th>
                  <th scope="row">{element.name}</th>
                  <th scope="row">{element.description}</th>
                  <th scope="row">{element.price}</th>
                  <th scope="row">{formattedDate}</th>
                  <th scope="row" className='mx-2'>

                    <button className='btn btn-outline-danger mx-1'  onClick={() => { handleStatus(element._id, false) }}><i className="bi bi-trash3"></i></button>
                    <Link to={"/vendor/updatesubservice/"+element?._id}>
                    <button className='btn btn-outline-success mx-1'><i className="bi bi-pencil-square"></i></button>
                    </Link>
                  </th>

                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}
