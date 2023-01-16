import { Router } from "express";
import { AuthService } from "../services/AuthService.js";

const router = Router();
const outhService = new AuthService();


router.get('/login', async (req, res) => {
    console.log(`This is a get operation`);
    const {email, password} = req.query.email ? req.query : req.body
    const enable = await outhService.getSignedToken(email, password);
    
    if (!enable) res.status(404).send("Cliente not found")
    else res.status(200).json(enable); 
});


export default router;