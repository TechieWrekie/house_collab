import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './SubCategory.css'
import ApiServices from '../../Components/services/ApiServices';


export default function SubCategory() {

    const [category, setcategory] = useState([]);
    const [categoryId, setcategoryId] = useState("");
    const [subcat, setsubcat] = useState([]);

    const [name, setname] = useState("");
    const [Image, setImage] = useState("");
    const [imgName, setimgName] = useState("");
    const [imagePreview, setimagePreview] = useState(null);



    const handleImage = (e) => {
        const selectedImage = e.target.files[0]
        setImage(selectedImage)
        setimgName(e.target.value)

        const imageURL = URL.createObjectURL(selectedImage)
        setimagePreview(imageURL)

    }


    const addSubCategory = (e) => {
        e.preventDefault();
        let data = new FormData()
        data.append("name", subcat.name)
        data.append("subcategory_image", Image)
        data.append("categoryId", categoryId)
        ApiServices.addSubCategory(data).then(
            (res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                } else {
                    toast.error(res.data.message)
                }
            }
        ).catch(
            (err) => {
                toast.error("Something went wrong")
            }
        )
        setname("");
        setImage("");
        setimgName("");
    }


    const allCategory = () => {
        axios.post("https://kizaapi.ksesystem.com/api/category/all", {}, {
            headers: {
                'Authorization':
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGtpemF0ZXh0aWxlcy5jb20iLCJ1c2VyVHlwZSI6MSwiX2lkIjoiNjNmOWVkZTc1MjBmMDk1ZTJmODUwNTZjIiwiaWF0IjoxNjg2ODk2NzU5fQ.Kg4I8o-RI2WWKqAKyoXY1yYXUULaiXNk9eYtOTB-lzY',
                'Content-Type': 'multipart/form-data', // Set content type for FormData
            },
        }).then(
            (res) => {
                // console.log(res.data.data)
                console.log(res.data.data._id)
                setcategory(res.data.data)

            }
        )
    }

    const handleCategoryId = (e) => {
        setcategoryId(e.target.value)
    }
    console.log(categoryId)


    useEffect(
        () => {
            allCategory();
        }, []
    )

    useEffect(
        () => {
            if (categoryId) {
                var data = {
                    categoryId: categoryId
                }
            }
            else {
                var data = {

                }
            }
            ApiServices.showSubCategory(data).then(
                (res) => {
                    console.log(res)
                    setsubcat(res.data.data)
                }

            )
        }, [categoryId]
    )


    return (
        <div>
            <>
                <div>
                    <section className=" gradient-custom ">
                        <div className="container py-5">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-12 col-lg-9 col-xl-7">
                                    <div className="card shadow-2-strong card-registration cardPosition" style={{ borderRadius: "15px" }}>
                                        <div className="card-body p-4 p-md-5">
                                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Category</h3>
                                            <form onSubmit={addSubCategory} >

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">

                                                        <div className="form-outline">
                                                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleCategoryId}>
                                                                <option defaultValue="Category">Select Category</option>
                                                                {category?.map((e, index) => {
                                                                    return <option value={e._id} key={index} >{e.name}</option>

                                                                })}
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>

                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Add Sub Category</h3>

                                                <div className="row">
                                                    <div className="col-md-6 mb-3">

                                                        <div className="form-outline">
                                                            <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                                                                <option value="" selected disabled>Select Sub-Category</option>
                                                                {subcat?.map((e, index) => {
                                                                    return <option value={e?._id} key={index} >{e?.name}</option>

                                                                })}
                                                            </select>
                                                        </div>
                                                        <div className="form-outline">
                                                            <input type="file" id="name" className="form-control form-control-lg" value={imgName} onChange={handleImage} />
                                                            <label className="form-label" htmlFor="name">Image</label>
                                                        </div>

                                                    </div>
                                                    <div className='col-md-6 mb-3'>
                                                        {imagePreview && (
                                                            <div>
                                                                <h5 className='ms-4'>Image Preview</h5>
                                                                <img src={imagePreview} alt='image preview' className='ms-4 mt-4' style={{ width: "200px", height: "200px" }} />
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>



                                                <div>
                                                    <input className='btn btn-primary' type='submit' value="Submit"></input>
                                                </div>


                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        </div>
    )
}
