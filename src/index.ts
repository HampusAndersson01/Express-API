/**
 * Required External Modules
 */

import express from "express";

import menuRouter from "./menu.router";

/**
 * App Variables
 */

const app = express();
const port = 4444;

/**
 *  App Configuration
 */

app.use(express.json());

app.use("/menu", menuRouter);
/**
 * Server Activation
 */
app.listen(port, () => console.log("Running on: http://localhost:${port}"));
