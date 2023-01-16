import { Router } from "express";
import { Authenticate, ValidateRoleUserAndAdmin } from '../common/jwtStrategy.js';
import { ClientsService } from "../services/ClientsService.js";

const router = Router();
const clientsService = new ClientsService();

router.get("/getById",[Authenticate, ValidateRoleUserAndAdmin], async (req, res) => {
  console.log(`This is a get operation`);
  const {id} = req.query.id ? req.query : req.body;
  const clientFound = await clientsService.getClientById(id);
  if(!clientFound) res.status(404).send("Cliente no encontrado con Id")
  else res.status(200).json(clientFound);
});

router.get("/getByName",[Authenticate, ValidateRoleUserAndAdmin], async (req, res) => {
  console.log(`This is a get operation`);
  const {name} = req.query.name ? req.query : req.body;
  const clientFound = await clientsService.getClientByName(name);
  if(!clientFound) res.status(404).send("Cliente no encontrado con nombre usuario")
  else res.status(200).json(clientFound);
});

export default router;
