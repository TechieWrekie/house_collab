import React, { useState, useEffect } from 'react'
import ApiServices from '../services/ApiServices';
import { PuffLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const vendordatastring = sessionStorage.getItem('userData')
const vendordata = JSON.parse(vendordatastring)
const vendorId = vendordata?._id
console.log(vendorId)


export default function VendorUpdateSubService() {
    const [name, setname] = useState('');
    const [image, setimage] = useState('');
    const [price, setprice] = useState('');
    const [serviceid, setserviceid] = useState('');
    
    const [description, setdescription] = useState('');
    const [prevImage, setprevImage] = useState();




    const [load, setload] = useState(true);

    const nav = useNavigate()
    const params = useParams()
    const subserviceId = params?._id

    const handleUpdateSubService = (e) => {
        setload(true)
        e.preventDefault()
        const data = new FormData()
        data.append("name", name)
        data.append("price", price)
        data.append("description", description)
        data.append("vendorId",vendorId)
        data.append("_id",subserviceId)
        data.append("serviceId",serviceid)
        data.append("subService_image", image)
        ApiServices.subserviceupdate(data).then(
            (res) => {
                // console.log(res)
                nav('/vendor/managesubservice')
                setTimeout(() => {
                    toast.success(res.data.message)
                    setload(false)
                }, 2000);

            }
        ).catch(
            (err) => {
                setTimeout(() => {
                    toast.error(err.data.message)
                    setload(false)
                }, 2000);
            }
        )
    }

    useEffect(
        () => {
            const data = {
                _id: subserviceId
            }
            ApiServices.subservicesingle(data).then(
                (res) => {
                    setTimeout(() => {
                        console.log(res.data.data.signedUrl)
                        setname(res.data.data.name)
                        setprice(res.data.data.price)
                        setdescription(res.data.data.description)
                        setprevImage(res.data.data.signedUrl)
                        setserviceid(res.data.data.serviceId._id)
                        setload(false)
                    }, 1500);
                }
            )
        }, [load]
    )

    const handleImage = (e) => {
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
            {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
            <div className={load == true ? 'disable-screen' : ''}>
                {/* Heading */}
                <div className='mt-5 pt-5'>
                    <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
                        <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Update Sub-Service</h1>
                    </div>
                </div>
                {/* Form starts here */}
                <div className='container mt-4'>
                    <form onSubmit={handleUpdateSubService}>
                        <div className="mb-3">
                            <label htmlFor="service" className="form-label">Sub service name</label>
                            <input type="text" className="form-control" id="service" value={name} onChange={(e) => { setname(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" value={price} onChange={(e) => { setprice(e.target.value) }} />
                        </div>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <textarea className="form-control" id="desc" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="mb-3">
                                    <label htmlFor="file" className="form-label mx-4">Previous Image</label>
                                    {prevImage && (
                                        <img src={prevImage} className='mx-4' style={{ width: "150px", height: "120px" }} alt="Previous" />
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">Upload New Image</label>
                            <input type="file" className="form-control" id="file" onChange={(e) => { handleImage(e) }} />
                        </div>
                        <button className="btn btn-primary mb-5 mt-1" >Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}
