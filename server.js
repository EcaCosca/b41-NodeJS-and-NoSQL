import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from "./db/mongodb.js";
// import postsRouter from "./routes/postsRouter.js";
// import ecaRouter from "./routes/ecaRouter.js";
import estebanRouter from "./routes/estebanRouter.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// ROUTES
// app.use("/posts", postsRouter)
// ECA ROUTES
// app.use("/eca", ecaRouter)
// // OLEKSIY ROUTES
// app.use('/oleksiy', oleksiyRouter)
// // CHRIS ROUTES
// app.use('/chris', chrisRouter)
// // TAMER ROUTES
// app.use('/tamer', tamerRouter)
// // JERRY ROUTES
// app.use("/jerry", jerryRouter)
// // BEN ROUTES
// app.use('/ben', benRouter)
// // SUS ROUTES
// app.use('/susanna', susannaRouter)
// // VIJ ROUTES
// app.use("/vijaya", vijayaRouter)
// ESTEBAN ROUTES
app.use("/esteban", estebanRouter)



app.listen(port, () =>
  console.log(`http://localhost:${port}/`)
);