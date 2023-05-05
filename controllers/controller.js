import Questions from "../models/questionsSchema.js";
import Result from "../models/resultSchema.js";
import questions,{answers} from '../database/data.js'

/**get all question */

export async function getQuestions(req,res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

/** insert all question */

export async function insertQuestions(req,res){
    try {
        Questions.insertMany({questions,answers},res.json({ msg: "Data Saved Successfully...!"}))
    } catch (error) {
        res.json({error}) 
    }
}

/** Delete All the Questions */

export async function deleteQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({msg:"Qusetions Deleted Sucessfully"})
    } catch (error) {
        res.json({error})
    }
}

/** Get all result */

export async function getResult(req,res){
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({error})    }
}

/** Post all result */

export async function postResult(req,res){
    try {
        const {username, result, attempts, points,achived} = req.body;
         if(!username && !result)throw new Error({msg :"Data Not Provided"});

         Result.create({username, result, attempts, points,achived});res.json({msg : "data saved Sucessfully"})
    } catch (error) {
        res.json({error})
    }
}

/** delete all result */

export async function deleteResult(req,res){
    try {
        await Result.deleteMany();
        res.json({msg : "Result Deleted Successfully"})
    } catch (error) {
        res.json({error})
    }
}