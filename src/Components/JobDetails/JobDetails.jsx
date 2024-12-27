import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs =  useLoaderData()
     const{ id }=  useParams()
     const intid = parseInt(id)
    const job = jobs.find((job)=> job.id === intid)
    const {logo,job_title,job_type,location,salary,company_name,remote_or_onsite} = job

    return (
        <div>
              <div>
                         <h1>Job Respos</h1>
              </div>

              <div>

              </div>
        </div>
    );
};

export default JobDetails;