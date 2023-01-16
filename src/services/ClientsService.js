import { getClientsId } from "../Utils/FetchData.js";
import { getClientsName } from "../Utils/FetchData.js";

export class ClientsService {

   getClientById = async (id) => {
    console.log('This is a function on the service');
    var Client = {}
    Client = getClientsId(id);
    return Client;
  }
  getClientByName = async (name) => {
    console.log('This is a function on the service');
    const Clients = getClientsName(name);
    return Clients;
  }
}
