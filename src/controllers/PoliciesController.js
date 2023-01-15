import { Router } from "express";
import { Authenticate, ValidateRoleAdmin } from '../common/jwtStrategy.js';
import { PoliciesService } from "../services/PoliciesService.js";

const router = Router();
const policiesService = new PoliciesService();

router.get("/getByClientName",  async (req, res) => {
  console.log("name: ", req.query.name || req.body.name);
  console.log(`This is a get operation`);
  const {name} = req.query.name ? req.query : req.body;


  const policieFound = await policiesService.getPolicieByClientName(name);
  if(!policieFound) res.status(404).send("Politica no encontrada con nombre cliente")
  return res.status(200).json(policieFound);
});

export default router;
