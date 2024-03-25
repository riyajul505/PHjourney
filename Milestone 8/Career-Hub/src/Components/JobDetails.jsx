import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const job = useLoaderData();
    const {jobId} = useParams();
    const find = job.find(job =>job.id == jobId);
    
    const { id, company_name, job_type, logo, salary, job_title,location,remote_or_onsite, job_description, job_responsibility, educational_requirements, experiences} = find;
    return (
        <div>
            <h1>{job_description}</h1>            
            <h1>{job_responsibility}</h1>
            <h1>{educational_requirements}</h1>
            <h1>{experiences}</h1>
            <button onClick={()=>{toast('Successfully Applied')}} className="btn btn-primary">Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;