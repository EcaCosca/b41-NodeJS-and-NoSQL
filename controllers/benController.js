// GET /getAllPosts
export const getAllPosts = (req, res) => {
    res.send("ben get all posts");
};

// GET /getSinglePost/:id
export const getSinglePost = (req, res) => {
    const id = req.params.id;
    res.send("ben GET SINGLE post WITH ID OF " + id);
};

// POST /createPost
export const createPost = (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("ben POST CREATE NEW POST");
};

// PUT /editSinglePost/:id
export const editSinglePost = (req, res) => {
    const id = req.params.id;
    res.send("ben PUT SINGLE post WITH ID OF " + id);
};

// DELETE /deleteSinglePost/:id
export const deleteSinglePost = (req, res) => {
    const id = req.params.id;
    res.send("ben DELETE SINGLE post WITH ID OF " + id);
};
