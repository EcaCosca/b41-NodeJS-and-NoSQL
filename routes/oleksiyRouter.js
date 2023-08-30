import {Router} from "express";
// import {createPost, editPostByID, getAllPosts, getOnePostByID, deletePostByID} from "../controllers/oleksiyController.js";
const app = Router();


//GET all posts
app.get("/getAllPosts", (req, res)=> {
    res.send('hi from Oleksiy')
});
//GET single post
app.get("/getSinglePost/:id", (req, res)=>{
    const id = req.params.id
res.send('oleksiy get single post with id of' + id)
});
//POST create post

app.post("/createPost", (req, res)=>{
    const body = req.body
    console.log(body);
res.send(`oleksiy POST CREATE NEW POST and here is what you have sent ${body.name}`)
});

//PUT edit post

app.put("/editSinglePost/:id", (req, res)=>{
    const {id} = req.params
res.send(`oleksiy PUT edit post and here is what you have sent ${id}`)
});


//DELETE delete singlepost
app.delete("/deleteSinglePost/:id", (req, res)=>{
    const id = req.params.id
res.send('oleksiy DELETE single post with id of' + id)
});


export default app;