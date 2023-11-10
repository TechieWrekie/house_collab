import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiServices from '../../Components/services/ApiServices';

export default function ShowUser() {
  const [allUsers, setallUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiServices.showAllUser();
        console.log(res.data.data);
        setallUsers(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the range of items to display based on currentPage and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <>
      <div className='mt-5 pt-5'>
        <h1 className='text-center fw-bold pt-3'>User Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers?.map((e, index) => (
              <tr key={index}>
                <th scope="row">{startIndex + index + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>
                  <Link to={"/admin/updateuser/" + e?._id} className='btn btn-outline-danger'><i className="bi bi-pencil-square"></i>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              {Array.from({ length: Math.ceil(allUsers.length / itemsPerPage) }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
