import React from 'react';
import logo from './image/logoFPT.svg'
const Exercise4 = () => {
  return (
    <div className="container-fluid p-0">
      {/* Header - Logo + Nav */}
      <div className="bg-warning text-center py-4">
        <img
          src={logo}
          alt="FPT University"
          style={{ maxWidth: "300px" }}
          className="img-fluid"
        />
        <div className="mt-3">
          <a href="#" className="text-white mx-2 text-decoration-none">Home</a>
          <a href="#" className="text-white mx-2 text-decoration-none">About</a>
          <a href="#" className="text-white mx-2 text-decoration-none">Contact</a>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="text-center my-5">
        <h4 className="fw-bold">About</h4>
        <p>This is the about section of the website.</p>

        <h4 className="fw-bold mt-4">Contact</h4>
        <p>For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
      </div>

      {/* Footer */}
      <footer className="bg-warning text-center py-3">
        <p className="mb-0 text-white">&copy; 2023 Website. All rights reserved.</p>
      </footer>

      <hr />
    </div>
  );
};

export default Exercise4;
