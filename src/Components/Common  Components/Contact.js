import React,{useEffect, useState} from 'react'
import { PuffLoader } from 'react-spinners';
import ApiServices from '../services/ApiServices';
    

export default function Contact() {
  const [load, setload] = useState(true);
  const [data, setdata] = useState([]);
  
  
  useEffect(
    ()=>{
     
      ApiServices.allcontact().then(
        (res)=>{
          setdata(res.data.data)
          setTimeout(() => {
            console.log(res.data.data)
            setload(false)
          }, 1500);
        }
      )
    },[load]
  )

    const obj={
        position:"absolute",
        left:"50%",
        bottom:"50%"
    }
  return (
    <>
    {/* loader */}
    {load==true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load==true?"disable-screen":''}>
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>User Contact</h1>
        </div>


        {/* Table starts from here */}
        <div className='container mt-5'>
          <table className="table  table-hover">
            <thead>
              <tr className='table-dark'>
                <th scope="col">S. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                
              </tr>
            </thead>
            <tbody>
              {data?.map((element, index) => {
                return (<tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{element?.name}</td>
                  <td>{element?.email}</td>
                  <td>{element?.subject}</td>
                  <td>{element?.message}</td>

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
