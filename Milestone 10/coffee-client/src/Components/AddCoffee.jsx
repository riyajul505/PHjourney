import React from "react";

const AddCoffee = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const url = e.target.url.value;
    const coffee = { name, quantity, url };
    fetch(
      "http://localhost:5000/addCoffee",
      {
        method: "POST",
        headers: {
          'content-type': "application/json",
        },
        body: JSON.stringify(coffee),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add coffee!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Coffee Quantity"
                  name="quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Coffee Photo Url</span>
                </label>
                <input
                  type="text"
                  name="url"
                  placeholder="URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
