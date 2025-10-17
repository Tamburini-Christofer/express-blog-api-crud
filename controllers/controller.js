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

