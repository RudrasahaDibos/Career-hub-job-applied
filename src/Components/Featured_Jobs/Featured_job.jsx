import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
const Featured_job = ({ job }) => {
    const { logo,job_title,job_type,location,salary,company_name,remote_or_onsite} = job
    console.log(job)
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="ml-8 mt-4">
                <img
                    src={logo}
                    alt="Google" />
            </div>
            <div className="card-body">
                <h2 className="card-title">
                   {job_title}
                </h2>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <button className="btn border-bg-">{job_type}</button>
                    <button className="btn ">{remote_or_onsite}</button>
                </div>
                  <div className="flex gap-4 ">
                    <div className="flex justify-center items-center gap-2">
                    <IoLocation />
                    <p>{location}</p>
                    
                    </div>
                     <div className="flex justify-center items-center gap-2">
                     <RiMoneyRupeeCircleLine />
                     <p>Salary:{salary}</p>
                     </div>
                     
                  </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Featured_job;