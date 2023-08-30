import {Router} from "express";
import { getAllPosts, getSinglePost, createPost, editSinglePost, deleteSinglePost } from "../controllers/estebanController.js";
const app = Router();

// GET /getAllPosts
app.get("/getAllPosts", getAllPosts);

// GET /getSinglePost/:id
app.get("/getSinglePost/:id", getSinglePost);

// POST /createPost
app.post("/createPost", createPost);

// PUT /editSinglePost/:id
app.put("/editSinglePost/:id", editSinglePost);

// DELETE /deleteSinglePost/:id
app.delete("/deleteSinglePost/:id", deleteSinglePost);

export default app;