import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";

const JobDetails = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    const { id } = useParams()
    const intid = parseInt(id)
    const job = jobs.find((job) => job.id === intid)
    const { logo, job_title, job_type, location, salary, company_name, remote_or_onsite, job_description, job_responsibility,
        experiences, educational_requirements, contact_information
    } = job

    return (
        <div className="max-w-6xl mx-auto flex gap-4 mt-8 ">
            <div className="w-2/3">
                <h1><span className=" font-bold">Job Description:</span>{job_description}</h1>
                <br />
                <h1><span className=" font-bold">Job responsibility:</span>{job_responsibility}</h1>
                <br />
                <h1><span className=" font-bold">Educational requirements:</span><br /> {educational_requirements}</h1>
                <br />
                <h1><span className=" font-bold">Experiences:</span><br /> {experiences}</h1>
            </div>


            <div className=" w-1/3">
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 shadow-xl rounded-lg ">
                    <div className="card-body">
                        <h2 className="font-bold">Job Details</h2>
                        <hr />
                        <div className="">

                            <div className="flex justify-center items-center gap-2">
                                <RiMoneyRupeeCircleLine />
                                <p>Salary:{salary} (Per Month)</p>
                            </div>
                            <br />
                            <div className="flex justify-center items-center gap-2">
                                <CiCalendar />
                                <p>Job Title :{job_title}</p>
                            </div>

                        </div>
                        <h1 className="font-bold">Contact Information </h1>
                        <hr />

                        <div className="">

                            <div className="flex justify-center items-center gap-2">
                                <FaPhone />
                                <p>Phone:{contact_information.phone}</p>
                            </div>
                            <br />
                            <div className="flex justify-center items-center gap-2">
                                <SlEnvolopeLetter />
                                <p>Email:{contact_information.email}</p>
                            </div>
                            <br />
                            <div className="flex justify-center items-center gap-2">
                                <IoLocation />
                                <p>Address:{contact_information.address}</p>
                            </div>

                        </div>



                       
                    </div>
                </div>

                <div className="mt-4">
                            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full btn-primary">Apply Now</button>
                        </div>
            </div>

        </div>
    );
};

export default JobDetails;