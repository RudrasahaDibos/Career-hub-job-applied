import { useEffect, useState } from "react";
import Featured_job from "./Featured_job";


const Featured_Jobs = () => {

  const [Jobs , setJobs] = useState([])

  useEffect(()=>{
      fetch('jobs.json')
      .then(res=>res.json())
      .then(data => setJobs(data))
  },[])

    return (
        <div>
            <div>
             <h1 className="text-center text-2xl font-bold">Featured Jobs</h1>
             <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                {
                    Jobs.map((job,index)=><Featured_job key={index} job={job}></Featured_job>)
                }
            </div>
        </div>
    );
};

export default Featured_Jobs;