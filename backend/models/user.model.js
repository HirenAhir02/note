import mongoose, { Schema }  from "mongoose";

const userSchema = new Schema({
    username:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    password:{
        type : String,
        require : true
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
})

const User = mongoose.model("User",userSchema);

export default User;