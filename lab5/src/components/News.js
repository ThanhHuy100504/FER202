import React from 'react';

const newsList = [
  { id: 1, title: 'Woman bakes...', description: '“What started as a means to get a rise out of my Grammy...', images: '/images/event-1.jpg' },
  { id: 2, title: 'Martha Stewart shows off 30 pies', description: 'Queen of Thanksgiving...', images: '/images/event-2.jpg' },
  { id: 3, title: 'Burger King breakfast sandwich', description: 'This is a win for flatbread fans.', images: '/images/event-3.jpg' },
  { id: 4, title: 'Popeyes adds chicken wings', description: 'You can get ’em in 5 flavors.', images: '/images/event-4.jpg' },
];

const News = () => (
  <div className="container mt-4">
    <h2>News</h2>
    <div className="row">
      {newsList.map(news => (
        <div className="col-md-6 mb-4" key={news.id}>
          <div className="card">
            <img src={news.images} className="card-img-top" alt={news.title} />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              {/* <p className="card-text">{news.description}</p> */}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default News;
