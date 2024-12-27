

const AppliedJob = ({appliedjob}) => {
    const {logo, job_title, job_type, location, salary, company_name, remote_or_onsite, job_description, job_responsibility,
        experiences, educational_requirements, contact_information
    } = appliedjob
    return (
        <div className="">
              <h1>{job_title}</h1>
        </div>
    );
};

export default AppliedJob;