import React from "react";
import { Link } from "react-router-dom";

const Featured = ({ jobDetails }) => {
  const { id, company_name, job_type, logo, salary, job_title,location,remote_or_onsite} = jobDetails;

  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={logo}
          alt="Shoes"
          className="rounded-xl w-[50px] h-[30px] "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <span>{remote_or_onsite}</span> <span>{job_type}</span>
        </div>
        <div>
        <span>{location}</span> <span>{salary}</span>
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
