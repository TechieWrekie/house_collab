import React, { useEffect, useState } from 'react'
import ApiServices from '../services/ApiServices'
import { format } from 'date-fns';
import { toast } from 'react-toastify'
import * as qs from 'qs'
import { PuffLoader } from 'react-spinners';
export default function Customers() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(true);



  useEffect(
    () => {
      ApiServices.customerAll().then(
        (res) => {
          setTimeout(() => {
            console.log(res.data.data)
            setdata(res.data.data)
            setload(false)
          }, 1500);
        }
      )
    }, [load]
  )

  const handleStatus = (id, status) => {
    const data = {
      _id: id,
      status
    }
    setload(true)
    ApiServices.changeuser(qs.stringify(data)).then(
      (res) => {

        setTimeout(() => {
          setload(false)
          toast.success(res.data.message)
        }, 2000);


      }
    )
  }
  const obj = {
    position: "absolute",
    top: "30%",
    left: "50%"
  }

  return (
    <>
      {/* laoder */}
      {load == true && <PuffLoader color='#36d7b7' load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load == true ? 'disable-screen' : ''}>
        <div className='mt-5 pt-5'>
          <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
            <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Customer's List</h1>
          </div>

          {/* Table starts from here */}
          <div className='container mt-5'>
            <table className="table  table-hover">
              <thead>
                <tr className='table-dark'>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Status</th>
                  <th scope="col">Update Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((element, index) => {
                  const dobDate = new Date(element.dob)
                  const formattedDob = format(dobDate, 'MMMM d, yyyy');
                  return (<tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{element.firstName}</td>
                    <td>{element.lastName}</td>
                    <td>{element.email}</td>
                    <td>{formattedDob}</td>
                    <td>{element.contact}</td>
                    <td>{element.address}</td>
                    <td>{element.gender}</td>
                    <td>{element.userId.status == true ? "Active" : "Inactive"}</td>
                    <td>
                      <button className='btn btn-outline-success mx-2' disabled={element.userId.status} onClick={() => { handleStatus(element.userId._id, true) }}><i className="bi bi-check-lg"></i></button>
                      <button className='btn btn-outline-danger mx-2' disabled={!element.userId.status} onClick={() => { handleStatus(element.userId._id, false) }}><i className="bi bi-x-lg"></i></button>
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
