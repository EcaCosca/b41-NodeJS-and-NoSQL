// import Posts from "../schemas/postSchema.js";

// // GET /getAllPosts
// export const getAllPosts = (req, res) => {
//     Posts.find({})
//     .then(results => {
//         res.status(200).send(results)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// };

// // GET /getSinglePost/:id
// export const getSinglePost = (req, res) => {
//     Posts.find({_id: req.params.id})
//     .then(results => {
//         res.status(200).send(results)
//     })
//     .catch(err => {
//         console.log(err);
//     })

//     // Posts.findOne({_id: req.params.id})
//     // .then(results => {
//     //     res.status(200).send(results)
//     // })
//     // .catch(err => {
//     //     console.log(err);
//     // })
// };

// // POST /createPost
// export const createPost = (req, res) => {
//     const {title, author, body} = req.body;
//     try{
//         Posts
//         .create({ title: title, author: author, body: body })
//         .then(newPost => {
//           res.status(200).send(newPost);
//         })
//     }catch(err){
//         console.log(err);
//     }
// };

// // PUT /editSinglePost/:id
// export const editSinglePost = (req, res) => {
//     const {id} = req.params;
//     const {title, author, body} = req.body;

//     Posts.findByIdAndUpdate({_id: id}, {title: title, author: author, body: body})
//     .then(results => {
//         res.status(200).send(results)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// };

// // DELETE /deleteSinglePost/:id
// export const deleteSinglePost = (req, res) => {
//     Posts.findByIdAndDelete({ _id: req.params.id })
//     .then(results => {
//         res.status(200).send(results)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// };
