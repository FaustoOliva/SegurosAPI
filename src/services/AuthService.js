import jwt from "jsonwebtoken";
import { getClientByGaP } from "../Utils/FetchData.js";
import 'dotenv/config'
import config from "../../config.js"

export class AuthService {
         getSignedToken = async (emailS, passwordS) => {
          const client = await getClientByGaP(emailS, passwordS) 
          if(!client) return false
           const token = "Token:" + jwt.sign(
                {
                    payload: "custom payload",
                    id: client.id,
                    userEmail: client.email,
                    role: client.role,
                },
                config.secretWord,
                {
                    expiresIn: 60 * 24 * 24,
                },
            );
            return token;
        };

  
}