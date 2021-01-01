import app from "./app.js";
import { config } from "./configuration/env.js";
import { connectToDB } from "./utils/db.js";

connectToDB();

// Get port from environment and store in Express.
const port = config.port;

// Get port from environment and store in Express.
app.listen(port, () => console.log(`App listening on port ${port}`));
