import { compare } from "bcryptjs";
import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
        default: 'Applied'
    },
    appliedDate:{
        type: Date,
        default: Date.now
    },
    notes:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //refer to the User model
    }
},{timestamps: true});

const Job = mongoose.model('Job', jobSchema);
export default Job;