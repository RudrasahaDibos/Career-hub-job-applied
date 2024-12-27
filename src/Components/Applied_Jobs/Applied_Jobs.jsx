import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/Localstorage";
import AppliedJob from "./AppliedJob";


const Applied_Jobs = () => {
  const jobs = useLoaderData()
  console.log(jobs)
  const [appliedjobs, setapplied] = useState([])
  const [displayjobs, setdispalyjobs] = useState([])

  const handaledispalyjobs = filter =>{
     if(filter === 'all'){
      setdispalyjobs(appliedjobs)
     }
     else if(filter === 'Remote'){
      const Remotejobs = appliedjobs.filter(job => job.remote_or_onsite === 'Remote')
           setdispalyjobs(Remotejobs)
     }
     else if(filter === 'Onsite'){
      const Onsitejobs = appliedjobs.filter(job => job.remote_or_onsite === 'Onsite')
           setdispalyjobs(Onsitejobs)
     }

  }
  useEffect(() => {
    const stroedappliedJobs = getStoredJobApplication()
    if (jobs.length > 0) {
      //   const jobApplieds = jobs.filter((job) => stroedappliedJobs.includes(job.id))
      //   console.log( stroedappliedJobs,jobs,jobApplieds)
      const jobsapplied = []
      for (const id of stroedappliedJobs) {
        const job = jobs.find((job) => job.id === id)
        if (job) {
          jobsapplied.push(job)
        }
      }

      setapplied(jobsapplied)
      setdispalyjobs(jobsapplied)
    }


  }, [jobs])

  return (
    <div>
      <h1>Applied Jobs{appliedjobs.length}</h1>
      <details className="dropdown" >
        <summary className="btn m-1">Filter</summary>
        <ul className="menu dropdown-content bg-slate-900 text-white rounded-box z-[1] w-52 p-2 shadow]xl">
          <li onClick={()=>handaledispalyjobs('all')}><a>All</a></li>
          <li onClick={()=>handaledispalyjobs('Remote')}><a>Remote</a></li>
          <li onClick={()=>handaledispalyjobs('Onsite')} ><a>Onsite</a></li>
        </ul>
      </details>

      {
        displayjobs.map((appliedjob, idx) => <AppliedJob key={idx} appliedjob={appliedjob} ></AppliedJob>)
      }
    </div>
  );
};

export default Applied_Jobs;