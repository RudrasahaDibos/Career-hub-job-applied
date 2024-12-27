
const getStoredJobApplication =() =>{
    const StoredJobApplication  = localStorage.getItem('job-Applications')
    if(StoredJobApplication){
        return JSON.parse(StoredJobApplication)
    }
    return[]
}

const saveJobApplication = id =>{
  const StoredJobApplications = getStoredJobApplication();
  const exists = StoredJobApplications.find((jobId) => jobId === id )
  if(!exists){
    StoredJobApplications.push(id)
    localStorage.setItem('job-Applications',JSON.stringify(StoredJobApplications))
  }
}

export {getStoredJobApplication,saveJobApplication}

