import axios from "axios";

export const getClientsByName = async (nameS) => {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/d8488912-f032-43ad-b296-c3eda2b9675d"
      );
      var c = response.data.clients.find(c => c.name == nameS)
      return c;
  } catch (error) {
    console.error(error);
  }
}

export const getClientsId = async (idS) => {
  try {
    var Client = {};
    const response = await axios.get(
      "https://run.mocky.io/v3/d8488912-f032-43ad-b296-c3eda2b9675d"
    );
    Client = response.data.clients.find(c => c.id == idS)
    return Client;
  } catch (error) {
    console.log(error);
  }
};

export const getClientsName = async (nameS) => {
  try {
    var Client = {};
    const response = await axios.get(
      "https://run.mocky.io/v3/d8488912-f032-43ad-b296-c3eda2b9675d"
    );
    Client = response.data.clients.find(c => c.name == nameS)
    return Client;
  } catch (error) {
    console.log(error);
  }
};

export const getPolicies = async (nameC) => {
  try {
    var client = await getClientsByName(nameC)
    const response = await axios.get(
      "http://www.mocky.io/v2/580891a4100000e8242b75c5"
    );
    var pS = response.data.policies.filter(p => p.clientId == client.id)
    return pS;
  } catch (error) {
    console.log(error);
  }
};

export const getClientByGaP = async (emailS, passwordS) => {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/d8488912-f032-43ad-b296-c3eda2b9675d"
      );
      var c = response.data.clients.find(c => c.email == emailS && c.password == passwordS)
      return c;
  } catch (error) {
    console.error(error);
  }
}