//todo Importo i post
const posts = require("../data/postsArray");

function index(req, res) {
  let filterPost = posts;

  if (req.query.tags) {
    filterPost = posts.filter((post) => post.tags.includes(req.query.tags));
  }

  res.json(filterPost);
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  res.json(post);
}

function store(req, res) {
  
  const newId = posts[posts.length - 1].id + 1;

  const { titolo, contenuto, immagine, tags } = req.body;

  posts.push({
    id: newId,
    titolo,
    contenuto,
    immagine,
    tags,
  });

  res
    .status(201)
    .json({ result: true, message: "Inserimento avvenuto con successo" });
}

console.log(req.body);

function update(req, res) {
  res.send("Modifica post" + req.params.id);
}

function modify(req, res) {
  res.send("Modifica parziale post" + req.params.id);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post === -1) {
    res.status(404);
    return res.json({
      status: 404,
      error: "Not Found",
      message: "post non trovata",
    });
  }

  posts.splice(posts.indexOf(post), 1);

  console.log(post);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
