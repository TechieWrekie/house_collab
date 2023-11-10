import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ApiServices from '../../Components/services/ApiServices';

export default function ShowCategory() {

const [CategoryData, setCategoryData] = useState([]);


  const showcategory = () =>{
   ApiServices.showCategory().then(
      (res)=>{
        console.log(res.data.data)
        if(res.data.success){
          setCategoryData(res.data.data)
          toast.success(res.data.message)
        }else{
          toast.warn(res.data.message)
        }
      }
    ).catch(
      (err)=>{
        toast.error("Something went wrong!")
      }
    )
  }
  useEffect(
    ()=>{
      showcategory();
    },[]
  )

  return (
    <>
      <div className='mt-5 pt-5'>
        <h1 className='text-center fw-bold pt-3'>Categories Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Category</th>
              <th scope="col">Sub-Category</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {CategoryData?.map((e,index)=>{
              return <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{e.categoryId?.name}</td>
              <td>{e.name}</td>
              <td><img src={"https://kizaapi.ksesystem.com/"+e?.image} style={{height:"200px", width:"200px"}}/></td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
