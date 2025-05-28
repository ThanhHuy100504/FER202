import React from 'react';
import logo from './image/logoFPT.svg'
import banner from './image/bannerFPT.jpg'
import student1 from './image/student1.jpg'
import student2 from './image/student2.jpg'
import student3 from './image/student3.jpg'
import student4 from './image/student4.jpg'

const students = [
  {
    id: 'DE180546',
    name: 'Lê Tự Thanh Huy',
    city: 'Đà Nẵng',
    status: 'Absent',
    image: student1,
  },
  {
    id: 'DE180549',
    name: 'Nguyễn Song Gia Huy',
    city: 'Quảng Nam',
    status: 'Absent',
    image: student2,
  },
  {
    id: 'DE180559',
    name: 'Phan	Thị Ngọc Quyên',
    city: 'Quảng Nam',
    status: 'Absent',
    image: student3,
  },
  {
    id: 'DE180560',
    name: 'Lê Văn Hoàng',
    city: 'Quảng Trị',
    status: 'Absent',
    image: student4,
  },
];

const Exercise5 = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-light py-2 px-3 d-flex justify-content-between align-items-center" >
        <img src={logo} alt="logo" style={{ height: 40 }} />
        <div>
          <a href="#" className="mx-2 text-dark text-decoration-none">Trang chủ</a>
          <a href="#" className="mx-2 text-dark text-decoration-none">Ngành học</a>
          <a href="#" className="mx-2 text-dark text-decoration-none">Tuyển sinh</a>
          <a href="#" className="mx-2 text-dark text-decoration-none">Sinh viên</a>
        </div>
        <div>
          <input type="text" placeholder="Search..." className="form-control form-control-sm" />
        </div>
      </div>

      {/* Banner */}
      <div className="text-center py-3 text-white" style={{ backgroundColor: '#f26522' }} >
        <img src={banner} alt="banner" className="img-fluid" style={{ maxHeight: 600, width: 1000 }} />
      </div>

      {/* Breadcrumb */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      {/* Students Detail */}
      <div className="container my-4">
        <h3 className="text-center fw-bold mb-4">Students Detail</h3>
        <div className="row">
          {students.map((student, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 text-center">
                <img src={student.image} alt={student.name} className="card-img-top" />
                <div className="card-body">
                  <p className="mb-1">{student.id}</p>
                  <p className="fw-bold">{student.name}</p>
                  <p>{student.city}</p>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name={`status${index}`} id={`absent${index}`} defaultChecked />
                    <label className="form-check-label" htmlFor={`absent${index}`}>Absent</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name={`status${index}`} id={`present${index}`} />
                    <label className="form-check-label" htmlFor={`present${index}`}>Present</label>
                  </div>
                </div>
                <div className="card-footer">
                  <button style={{ backgroundColor: '#f26522' }}  className="btn btn-warning btn-sm w-100">Submit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 text-white" style={{ backgroundColor: '#f26522' }}>
        <div className="container">
          <p className="mb-1"><strong>Our Address</strong></p>
          <p className="mb-1">Địa chỉ: FPT Đà Nẵng</p>
          <p className="mb-1">Tel: +842363717111 | +842363816321</p>
          <p className="mb-3">Email: fptuni@fpt.edu.vn</p>
          <div className="mb-2">
            <i className="bi bi-google mx-1"></i>
            <i className="bi bi-facebook mx-1"></i>
            <i className="bi bi-linkedin mx-1"></i>
            <i className="bi bi-youtube mx-1"></i>
            <i className="bi bi-envelope-fill mx-1"></i>
          </div>
          <p className="mb-0">&copy; Copyright 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Exercise5;
