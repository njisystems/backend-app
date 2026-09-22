import express from "express";

//Import Routes
import logbookRoutes from "./routes/logbookRoutes.js";

const app = express();

//API Routes
app.use("/logbook",logbookRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
