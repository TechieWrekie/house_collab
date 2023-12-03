import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import ApiServices from '../services/ApiServices';
import { Link } from 'react-router-dom';

export default function ViewBookings() {
  const [load, setload] = useState(true);
  const [bookingdata, setbookingdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    ApiServices.allbookingshow().then((res) => {
      setbookingdata(res.data.data);
      setTimeout(() => {
        setload(false)
      }, 1500);
    });
  }, []);

  const obj = {
    position: 'absolute',
    left: '50%',
    bottom:'50%'
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
                <div class="input-group rounded">
                  <input type="search" class="form-control rounded" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table starts from here */}
        <div className='container mt-5'>
        <div className='table-responsive'>
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
                <th scope='col'>Status</th>
                <th scope='col'>Feedback</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.length === 0 && (
                    <tr>
                      <td colSpan="12" className="text-center  fs-3">
                        No data to show
                      </td>
                    </tr>
                  )}
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
                    <td>{element?.bookingStatus}</td>
                    <td>
                      {element?.bookingStatus == 'completed' && 
                      <Link to={'/admin/viewbookingsfeedback/'+element?._id+'/'+element?.userId?._id} >
                      <i className="bi bi-chat-dots-fill" style={{fontSize:"25px", marginLeft:"30px",color:"green"}}></i>
                      </Link>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
}
