import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lbold">Latest </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Placeholder...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
