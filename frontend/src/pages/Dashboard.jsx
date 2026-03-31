import { useEffect,useState } from "react";
import API from "../api";
import "./dashboard.css";

function Dashboard(){
    const [jobs,setJobs] = useState([]);
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [notes, setNotes] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        fetchJobs();
    },[]);
    useEffect(()=>{
        fetchJobs();
    },[filterStatus, page, search]);

    const fetchJobs = async() => {
        try{
            const {data} = await API.get(`/jobs?page=${page}&status=${filterStatus}&search=${search}`);
            setJobs(data.jobs);
            setTotalPages(data.totalPages);

        }catch(error){
            console.log(error);
        }
    };
    const addJobHandler = async(e)=>{
        e.preventDefault();
        try{
            await API.post("/jobs",{company,role,status,notes});
            setCompany("");
            setRole("");
            setStatus("Applied");
            setNotes("");

            fetchJobs();
        }
        catch(error){
            console.log(error);
        }
    }
    const deleteJob = async(id)=>{
      try{
        await API.delete(`/jobs/${id}`);
        fetchJobs();
      } catch(error){
        console.log(error);

      }
    }
    const updateStatus = async(id,newStatus)=>{
      try{
        await API.put(`/jobs/${id}`,{status:newStatus});
        fetchJobs();
      }
      catch(error){
        console.log(error);
      }
    }
    const logoutHandler = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    };
    

return (
   <div className="dashboard-page">
  <header className="top-bar">
    <h2 className="logo">Dashboard</h2>
    <button className="logout-btn" onClick={logoutHandler}>Logout</button>
  </header>

  <div className="dashboard-container">

    {/* LEFT : Add Job */}
    <div className="add-job-card">
      <h3>Add Job</h3>
      <form onSubmit={addJobHandler}>
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit" className="add-btn">Add Job</button>
      </form>
    </div>

    {/* RIGHT : Jobs List */}
    <div className="jobs-section">
      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job._id} className={`job-card ${job.status.toLowerCase()}`}>
            <h4>{job.company}</h4>
            <p><strong>Role:</strong> {job.role}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p className="notes">{job.notes}</p>
            <button
              className="delete-btn"
              onClick={() => deleteJob(job._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>

  </div>
</div>
);
}

export default Dashboard;