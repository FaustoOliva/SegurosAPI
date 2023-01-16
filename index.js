import express from 'express';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import passport from "passport";
import ClientRouter  from "./src/controllers/ClientsController.js";
import PolicieRouter  from "./src/controllers/PoliciesController.js";
import AuthRouter  from "./src/controllers/AuthController.js";
import {jwtStrategy} from "./src/common/jwtStrategy.js"
import swaggerDocument from './openapi.json' assert { type: "json" };

var app = express()
var port = process.env.PORT || 8080
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy)
app.use(passport.initialize())
                                                                           
app.use("/client", ClientRouter);
app.use("/policy", PolicieRouter);
app.use("/auth", AuthRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`Server on http://localhost:${port}`);

});
