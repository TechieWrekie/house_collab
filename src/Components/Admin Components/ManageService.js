import React, { useEffect, useState } from 'react'
import ApiServices from '../services/ApiServices'
import { toast } from 'react-toastify'
import { PuffLoader } from "react-spinners";
import AdminMaster from '../../Layout/Admin Layout/AdminMaster';
import { Link } from 'react-router-dom';
export default function ManageService() {

  const [data, setdata] = useState([]);
  const [load, setload] = useState(true);


  useEffect(
    () => {
      ApiServices.showservice().then(
        (res) => {
          setdata(res.data.data)
          setTimeout(() => {
            setload(false)
          }, 2000);
        }
      ).catch(
        (err) => {
          toast.error("Something went error")
          setload(false)
        }
      )

    }, [load]
  )
  const handleStatus = (id, status) => {
    setload(true)
    const data = {
      _id: id,
      status: status
    }
    ApiServices.changeservice(data).then(
      (res) => {
        setTimeout(() => {
          toast.success("Service deleted successfully")
          setload(false)
          
        }, 1500);
      }
    )


  }

  const obj = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    bottom:'50%'
  };

  const filteredData = data.filter((element) => element.status !== false);
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
            <table className="table  table-hover">
              <thead>
                <tr className='table-dark'>
                  <th scope="col">S. No.</th>
                  <th scope="col">Image</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">Action</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                
                { filteredData?.map((element, index) => {
                  return (<tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th scope="row"><img src={`http://127.0.0.1:3004/${element.image}`} style={{ width: "150px", height: "120px" }}></img></th>
                    <th scope="row">{element.name}</th>
                    <th scope="row">

                      <button className='btn btn-outline-danger mx-1'  onClick={() => { handleStatus(element._id, false) }}><i className="bi bi-trash3"></i></button>

                    </th>
                    <th scope="row">
                      <Link to={"/admin/updateservice/"+element?._id}>
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
    </>
  )
}

