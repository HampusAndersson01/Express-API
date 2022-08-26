/**
 * Required External Modules
 */

import express from "express";

import menuRouter from "./menu.router";

/**
 * App Variables
 */

const app = express();

/**
 *  App Configuration
 */

app.use(express.json());

app.use("/menu", menuRouter);
/**
 * Server Activation
 */
app.listen(3000, () => console.log("Running on: http://localhost:3000"));
