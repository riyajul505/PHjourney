import React, { useEffect, useState } from "react";
import Featured from "./Featured";

const FeaturedJobsHome = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const [datalength, setDatalength] = useState(4);
  return (
    <div>
      <div>
        <h1 className="text-5xl font-extrabold text-center">Featured Jobs</h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {
            jobs.slice(0,datalength).map((job) => <Featured key={job.id} jobDetails={job}></Featured>)
        }
      </div>
      <div className={`flex items-center justify-center ${datalength===jobs.length && 'hidden'}`}>
        <button onClick={()=>{setDatalength(jobs.length)}} className="btn btn-primary">Show All</button>
      </div>
    </div>
  );
};

export default FeaturedJobsHome;
