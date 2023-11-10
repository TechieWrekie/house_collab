import React,{useEffect,useState} from 'react'
import './AdminDashboard.css'
import '../services/ApiServices'
import ApiServices from '../services/ApiServices'
export default function AdminDashboard() {
	const [data, setdata] = useState([]);
	

	useEffect(
		() => {
			ApiServices.adminDashboard().then(
				(res)=>{
					setdata(res.data)
				}
			)
		}, []
	)


	return (
		<>
			<div className='container mt-5 pt-5  text-center'>
				<div className='row mt-4'>
					<div className='col-md-4  maintext' data-aos="zoom-in">
						<div className='counter' >
							<h1 className='px-4'>{data?.totalVendors}</h1>
						</div>
						<div className='box'>
							<h1 className='px-4 fs-4 fw-bold'>Vendors</h1>
						</div>
					</div>
					<div className='col-md-4  maintext' data-aos="zoom-in">
						<div className='counter' >
							<h1 className='px-4'>{data?.totalCustomers}</h1>
						</div>
						<div className='box'>
							<h1 className='px-4 fs-4 fw-bold'>Customers</h1>
						</div>
					</div>
					<div className='col-md-4  maintext' data-aos="zoom-in">
						<div className='counter' >
							<h1 className='px-4'>{data?.totalServices}</h1>
						</div>
						<div className='box'>
							<h1 className='px-4 fs-4 fw-bold'>Services</h1>
						</div>
					</div>


				</div>
				<div className='row mt-4'  >
					<div className='col-md-4  maintext' data-aos="zoom-in" >
						<div className='counter' >
							<h1 className='px-4'>{data?.totalSubServices}</h1>
						</div>
						<div className='box'>
							<h1 className='px-4 fs-4 fw-bold'>Sub-services</h1>
						</div>
					</div>
					<div className='col-md-4  maintext' data-aos="zoom-in">
						<div className='counter' >
							<h1 className='px-4'>{data?.totalBookings}</h1>
						</div>
						<div className='box'>
							<h1 className='px-4 fs-4 fw-bold'>Bookings</h1>
						</div>
					</div>
					<div className='col-md-4  maintext' data-aos="zoom-in">
						<div className='counter' >
							<h1 className='px-4'>{data?.totalContacts}</h1>
						</div>
						<div className='box'>
							<h1 className='px-4 fs-4 fw-bold'>Contacts</h1>
						</div>
					</div>


				</div>
			</div>
		</>
	)
}
