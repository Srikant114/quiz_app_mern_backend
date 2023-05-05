import mongoose from "mongoose";
const { Schema } = mongoose;

/** result model */
const resultModel = new Schema({
    username : { type : String },
    result : { type : Array },
    attempts : { type : Number },
    points : { type : Number },
    achived : { type : String },
    createdAt : { type : Date }
});

export default mongoose.model('result', resultModel)