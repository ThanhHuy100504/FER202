import React from 'react';

const Exercise3 = () => {
  return (
    <div className="container my-4">
      {/* Tiêu đề bài */}
      <h3 className="fw-bold">3. Create website with bootstrap 5 as image below</h3>
      <hr />
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-2">
          <h1 className="display-5 fw-bold">Let's test the grid!</h1>
        </div>
      </div>
    <div>
      {/* Navigation Links */}
      <nav className="nav mb-4">
        <a className="nav-link active" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
      </nav>
    </div>
      {/* Grid layout chính xác như ảnh */}
      <div className="container mb-4">
        <div className="row g-1">
          {/* Row 1: 2 cột */}
          <div className="col-md-6">
            <div className="p-3 border bg-secondary-subtle text-dark">First col</div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border bg-secondary-subtle text-dark">Second col</div>
          </div>

          {/* Row 2: 3 cột */}
          <div className="col-md-4">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>

          {/* Row 3: 4 cột */}
          <div className="col-md-3">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border bg-secondary-subtle text-dark">col</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-3" style={{ backgroundColor: '#d6c6c6' }}>
        <h4 className="fw-bold">Created by ABC!</h4>
      </div>
    </div>
  );
};

export default Exercise3;
