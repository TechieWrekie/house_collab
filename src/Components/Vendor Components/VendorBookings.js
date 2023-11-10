import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import ApiServices from '../services/ApiServices';
import { Link } from 'react-router-dom';


export default function VendorBookings() {

  const [load, setload] = useState(true);
  const [bookingdata, setbookingdata] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const vendorId = JSON.parse(sessionStorage.getItem("userData"))

  const handleStatus = (e, bookingId, status) => {
    setload(true)
    e.preventDefault()
    const data = {
      _id: bookingId,
      bookingStatus: status
    }
    ApiServices.bookinstatuschange(data).then(

      (res) => {
        setTimeout(() => {
          setload(false)
        }, 1500);
      }
    )

  }

  useEffect(() => {
    const data = {
      vendorId: vendorId._id
    }
    ApiServices.allbookingshow(data).then((res) => {
      console.log(res.data)
      setbookingdata(res.data.data);
      setTimeout(() => {
        setload(false)
      }, 1500);
    });
  }, [load]);

  const obj = {
    position: 'absolute',
    left: '50%',
    bottom: '50%'
  };

  // Filter function
  const filterData = () => {
    const filtered = bookingdata.filter((element) => {
      // Customize your filtering logic here
      return (
        element.vendorId?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        element.subServiceId?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        element.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        element.bookingStatus?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [searchQuery, bookingdata]);

  return (
    <>
      {/* loader */}
      {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load == true ? 'disable-screen' : ''}>
        <div className='mt-5 pt-5'>
          <div className='container-fluid' style={{ backgroundColor: '#343B5D', height: '70px' }}>
            <div className='row'>
              <div className='col-lg-10'>
                <h1 style={{ color: 'white', display: 'flex', paddingTop: '10px' }}>View Bookings</h1>
              </div>
              <div className='col-lg-2 mt-3'>
                <div className="input-group rounded">
                  <input type="search" className="form-control rounded" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table starts from here */}
        <div className='container mt-5'>
          <table className='table table-hover'>
            <thead>
              <tr className='table-dark'>
                <th scope='col'>S. No.</th>
                <th scope='col'>Vendor</th>
                <th scope='col'>Date of Booking</th>
                <th scope='col'>Cost</th>
                <th scope='col'>Subservice</th>
                <th scope='col'>Customer</th>
                <th scope='col'>Contact No</th>
                <th scope='col'>Address</th>
                <th scope='col'>Description</th>
                <th scope='col'>Booked By</th>
                <th scope='col'> Created At</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((element, index) => {
                const formatteddate = new Date(element?.dateOfBooking).toLocaleDateString('en-US')
                const formattedcreatedAt = new Date(element?.createdAt).toLocaleDateString('en-US')
                return (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{element?.vendorId?.name}</td>
                    <td>{formatteddate}</td>
                    <td>{element?.cost}</td>
                    <td>{element?.subServiceId?.name}</td>
                    <td>{element?.name}</td>
                    <td>{element?.contact}</td>
                    <td>{element?.address}</td>
                    <td>{element?.description}</td>
                    <td>{element?.userId?.name}</td>
                    <td>{formattedcreatedAt}</td>
                    <td>
                      {element?.bookingStatus == "pending" ?
                        <div className='row'>
                          <div className='col-lg-6'>
                            <i className="btn btn-outline-success bi bi-check-lg" onClick={(e) => { handleStatus(e, element?._id, "approved") }} ></i>
                          </div>
                          <div className='col-lg-6'>
                            <i className="btn btn-outline-danger bi bi-x-lg"  style={{ marginRight: "20px" }} ></i>
                          </div>
                        </div> : element?.bookingStatus == "approved" ?
                          <button className='btn btn-outline-success' onClick={(e) => { handleStatus(e, element?._id, "completed") }} >Complete</button> :
                          element?.bookingStatus == 'completed'?
                          <div>
                            <span>Completed</span>
                          </div>:
                          element?.bookingStatus == "canceled"?
                          <span>Canceled</span>:
                          <div className='row'>
                            <div className='col-lg-6'>
                              <i className="btn btn-outline-success bi bi-check-lg" onClick={(e) => { handleStatus(e, element?._id, "approved") }} ></i>
                            </div>
                            <div className='col-lg-6'>
                              <i className="btn btn-outline-danger bi bi-x-lg" style={{ marginRight: "20px" }} ></i>
                            </div>
                          </div>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
