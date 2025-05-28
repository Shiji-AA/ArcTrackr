import User from '../Model/userModel.js'
import SiteVisit from  '../Model/sitevisitModel.js'
import generateToken from "../Utils/generateToken.js"
import jwt from 'jsonwebtoken';


const register=async (req,res)=>{
    const {name,email,password}=req.body
try{
    const userExists= await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"user already exists"})
    }
    const user=await User.create({
        name,email,password
    })
    if(user){
        res.status(201).json({
            id:user._id,
            name:user.name,
            email:user.email,
            message:"User registered successfully"
        })
    }
    else{
        res.status(400).json({message:"Invalid userdata"})
    }}
    
catch(error){
res.status(500).json({message:"Server error",error:error.message})

}
}

const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;      
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({error: "User does not exist."});
      }
      if (user.status === 'blocked') {
        return res.status(403).json({ error: "Your account has been blocked." }); 
      }
      if (await user.matchPassword(password)) {
        const userData = {
          name: user.name,
          email: user.email,
          id: user.id,
        };
        const token = generateToken(user.id);
        return res.json({
          userData,
          token,
          message: "Login successful",
        });
      } else {
        return res.status(401).json({error: "Incorrect-password."});
      }
    } catch (error) {
      return res
        .status(500)
        .json({error: "An error occurred. Please try again later." });
    }
  };

     const addSiteVisit= async(req,res)=>{
      try{
          const { department,batch, siteName, location, visitDate, status} = req.body; 
          
          console.log(department,"department")
           
        const newSiteVisit = await SiteVisit.create({
        department,batch, siteName, location, visitDate, status
        });
    
        if (newSiteVisit) {
         
            res.status(201).json({
            department,batch, siteName, location, visitDate, status,
              message :"SiteVisit added successfully"
            });
          } else {
            res.status(400).json({ error: 'Invalid SiteVisit data' });
          }
            }
      catch(error){
        return res.status(500).json({ message: "An error occurred. Please try again later." });  
      }}

          const getAllSiteVisit = async (req, res) => {
        try {
          const sitevisitDetails = await SiteVisit.find().exec();
          console.log(sitevisitDetails,"sitevisitDetails")
          if (sitevisitDetails) {      
           res.status(200).json({
              sitevisitDetails,
              message:"sitevisitDetails"
            });
          } else {
            return res.status(400).json({
              message: "no sitevisits in this table",
            });
          }
        } catch (error) {
          return res.status(500).json({ message: "An error occurred. Please try again later." });  
        }
      };



export {register,adminLogin,addSiteVisit,getAllSiteVisit}