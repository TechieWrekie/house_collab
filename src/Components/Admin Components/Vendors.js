import React, { useEffect, useState } from 'react'
import ApiServices from '../services/ApiServices'
import { toast } from 'react-toastify'
import { format } from 'date-fns';
import { PuffLoader } from 'react-spinners';

export default function Vendor() {

  const [data, setdata] = useState([]);
  const [load, setload] = useState(true);


  useEffect(
    () => {
      ApiServices.vendorall().then(
        (res) => {
          setTimeout(() => {
            setdata(res.data.data)
            setload(false)
          }, 2000);
        }
      )
    }, [load]
  )

  const vendorStatus = (id, status) => {
    const data = {
      _id: id,
      status:status
    }
    setload(true)
    ApiServices.changevendorstatus(data).then(
      
      (res) => {
        setTimeout(() => {
          setload(false)
          toast.success(res.data.message)
        }, 1000);
      }
    ).catch(
      (err) => {
        toast.error("Something Went wrong")
        setload(false)
      }
    )
  }
  const obj={
    position:"absolute",
    top:"30%",
    left:"50%"
  }

  return (
    <>
    {/* loader */}
    {load==true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load==true?"disable-screen":''}>
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Vendor's List</h1>
        </div>


        {/* Table starts from here */}
        <div className='container mt-5'>
          <table className="table  table-hover">
            <thead>
              <tr className='table-dark'>
                <th scope="col">S. No.</th>
                <th scope="col">Picture</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Gender</th>
                <th scope="col">Aadhar Number</th>
                <th scope="col">Service Type </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((element, index) => {
                const dobDate = new Date(element.dob)
                const formattedDob = format(dobDate, 'MMMM d, yyyy');
                return (<tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td><img src={element.signedUrl} style={{ widows: "90px", height: "90px" }}></img></td>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                  <td>{formattedDob}</td>
                  <td>{element.contact}</td>
                  <td>{element.address}</td>
                  <td>{element.gender}</td>
                  <td>{element.aadharNo}</td>
                  <td>{element.serviceId.name}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <button className='btn btn-sm btn-outline-success  mx-2' disabled={element.userId.status}  onClick={() => { vendorStatus(element.userId._id, true) }} ><i className="bi bi-check-lg"></i></button>
                      <button className='btn btn-sm btn-outline-danger mx-2 ' disabled={!element.userId.status} onClick={() => { vendorStatus(element.userId._id, false) }}><i className="bi bi-x-lg"></i></button>
                    </div>
                  </td>

                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  )
}
