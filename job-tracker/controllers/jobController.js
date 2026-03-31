import Job from "../models/Job.js";

export const createJob = async(req,res)=>{
    try{
        const {company,role,status,notes} = req.body;
        const job = await Job.create({
            company, role, status, notes, user: req.user._id //associate the job with the authenticated user
        });
        res.status(201).json(job);
    } catch (error) {
    console.log("CREATE JOB ERROR:", error.message);
    res.status(500).json({ message: error.message });
}
}
//for logged in user
export const getJobs = async(req,res)=>{
    try{
        //pagination i.e user can see only 6 jobs per page, 
        // if there are more than 6 jobs, user can navigate to next page to see more jobs
        const page = Number(req.query.page) || 1; //pagination
        const limit = 8; //number of jobs per page
        
        const filter = {user: req.user._id}; //filter jobs

        //filter by status
        if(req.query.status && req.query.status !== "" && req.query.status !== "All"){
            filter.status = req.query.status;
        }

        //search by company name
        if(req.query.search && req.query.search !== ""){
            filter.company = {$regex: req.query.search, $options: 'i'}; //filter by company name, case insensitive
        }

        //fetch job by pagination and filter by user and status
        const jobs = await Job.find(filter)
        .skip((page - 1) * limit)
        .limit(limit); //user sees only their own jobs

        const total = await Job.countDocuments(filter); //total number of jobs for the user

        res.json({
            jobs,
            page,
            totalPages: Math.ceil(total / limit) //total pages for pagination
        })
    }
    catch(error){
        res.status(500).json({message: "Error fetching jobs"});
    }
}
export const updateJob = async(req,res)=>{
    try{
        const job = await Job.findById(req.params.id);
        if(!job){
            return res.status(404).json({message: "Job not found"});
        }

        //check if the job belongs to the authenticated user
        if(job.user.toString() !== req.user._id.toString()){  //only user who created the job can update it
            return res.status(401).json({message: "Unauthorized"});
        }
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(updatedJob);
    }catch(error){        
        res.status(500).json({message: "Error updating job"});
    }
}
export const deleteJob = async(req,res)=>{
    try{
        const job = await Job.findById(req.params.id);
        if(!job){
            return res.status(404).json({message: "Job not found"});
        }
        //check if the job belongs to the authenticated user
        if(job.user.toString() !== req.user._id.toString()){  //only user who created the job can delete it
            return res.status(401).json({message: "Unauthorized"});
        }
        await job.deleteOne();
        res.json({message: "Job deleted"});
    }
    catch(error){
        res.status(500).json({message: "Error deleting job"});
    }
}