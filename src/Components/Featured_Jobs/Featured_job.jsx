import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
const Featured_job = ({ job }) => {
    const { id,logo,job_title,job_type,location,salary,company_name,remote_or_onsite} = job
    return (
        <div className="card bg-base-100  shadow-xl">
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
                    <button className="btn badge badge-outline text-[#7E90FE]">{job_type}</button>
                    <button className="btn badge badge-outline text-[#7E90FE]">{remote_or_onsite}</button>
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
                <div className="card-actions">
                  <Link to={`/job/${id}`}><button  className=" btn badge bg-indigo-400 text-white">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Featured_job;