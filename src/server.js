import app from "./app.js";
import { connectToDB } from "./utils/db.js";

connectToDB();

// Get port from environment and store in Express.
const port = process.env.PORT || "3000";

// Get port from environment and store in Express.
app.listen(port, () => console.log(`App listening on port ${port}`));
