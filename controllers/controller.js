//todo Importo i post
const posts = require("../data/postsArray");

function index(req, res) {

    let filterPost = posts;

    if (req.query.tags) {
        filterPost = posts.filter(
           post => post.tags.includes(req.query.tags)
        );
    }

    res.json(filterPost);


}

function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    res.json(post);
}

