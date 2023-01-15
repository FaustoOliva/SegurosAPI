import { Router } from "express";
import { AuthService } from "../services/AuthService.js";
import jwt from "jsonwebtoken";

const router = Router();
const outhService = new AuthService();


router.get('/login', async (req, res) => {
    console.log(`This is a get operation`);
    console.log("email:", req.query.email || req.body.email)
    console.log("password:", req.query.password || req.body.password)
    const {email, password} = req.query.email ? req.query : req.body
    console.log(email, password)
    const enable = await outhService.getSignedToken(email, password);
    
    if (!enable)res.status(404).send("Cliente not found")
    return res.status(200).json(enable); 
});


export default router;